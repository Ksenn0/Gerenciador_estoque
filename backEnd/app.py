from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client, Client
from dotenv import load_dotenv
import os
from datetime import datetime

load_dotenv()

app = Flask(__name__)
CORS(app) # Front pode chamar o Back

# Conexão com Supabase

supabase: Client = create_client(
    os.getenv("SUPABASE_URL"),
    os.getenv("SUPABASE_SERVICE_ROLE_KEY")
)

# Autenticação

def get_current_user_id():
    auth_header = request.headers.get('Authorization')
    if not auth_header or not auth_header.startswith('Bearer '):
        raise ValueError("Token não fornecido ou inválido")
    
    token = auth_header.split(" ")[1]
    try:
        user = supabase.auth.get_user(token)
        return user.user.id
    except Exception as e:
        raise ValueError(f"Token inválido: {str(e)}")
    
# Rotas
#teste
@app.route('/api/teste', methods=['GET'])
def teste():
    return jsonify({"mensagem": "Back-end funcionando com RSL!"})

#produtos
@app.route('/api/produtos', methods=['GET'])
def listar_produtos():
    try:
        user_id = get_current_user_id()
    except Exception as e:
        return jsonify({"error": str(e)}), 401
    
    status = request.args.get('status')
    response = supabase.table('produtos').select('*').eq('user_id', user_id).order('nome').execute()
    produtos = response.data
    
    if status == 'critico':
        produtos = [p for p in produtos if p['estoque_atual'] <= p.get('estoque_minimo', 5)]
    elif status == 'normal':
        produtos = [p for p in produtos if p['estoque_atual'] > p.get('estoque_minimo', 5)]
        
    return jsonify(produtos)

def criar_produto():
    try:
        user_id = get_current_user_id()
    except Exception as e:
        return jsonify({"error": str(e)}), 401
    data = request.json
    novo_produto = {
        'user_id': user_id,
        'nome': data['nome'],
        'categoria': data.get('categoria'),
        'preco': data['preco'],
        'estoque_atual': data.get('estoque_atual', 0),
        'estoque minimo': data.get('estoque minimo', 5),
        'foto_url': data.get('foto_url') # Front envia depois do upload no storage
    }
    
    response = supabase.table('produtos').insert(novo_produto).execute()
    return jsonify(response.data[0]), 201

# Movimentações

@app.route('/api/entrada', methods=['POST'])
def registrar_entrada():
    try:
        user_id = get_current_user_id()
    except Exception as e:
        return jsonify({"error": str(e)}), 401
    
    data = request.json
    mov = {
        'user_id': user_id,
        'produto_id': data['produto_id'],
        'tipo': 'entrada',
        'quantidade': data['quantitade'],
        'observação': data.get('observação')
    }
    supabase.table('movimentacoes').insert(mov).execute()
    return jsonify({"success": True, "mensagem": "Entrada resgistrada!"})

@app.route('/api/saida', methods=['POST'])
def registrar_saida():
    try:
        user_id = get_current_user_id()
    except Exception as e:
        return jsonify({"error": str(e)}), 401
    
    data = request.json
    mov = {
        'user_id': user_id,
        'produto_id': data['produto_id'],
        'tipo': 'saida',
        'quantidade': data['quantidade'],
        'observacao': data.get('obervacao')
    }
    supabase.table('movimentacoes').insert(mov).execute()
    return jsonify({'Success': True, 'mensagem': 'Saida registrada'})

@app.route('/api/vendas', methods=['POST'])
def registrar_venda():
    try:
        user_id = get_current_user_id()
    except Exception as e:
        return jsonify({"error": str(e)}), 401
    
    data = request.json
    mov = {
        'user_id': user_id,
        'produto_id': data['produto_id'],
        'tipo': 'venda',
        'quantidade': data['quantidade'],
        'preco_unitario': data['preco_unitario'],
        'cliente': data['cliente'],
        'observacao': data.get('observacao')
    }
    supabase.table('movimentacoes').insert(mov).execute()
    return jsonify({'Success': True, 'mensagem': 'Venda registrada'})

# Listar as movimentações

@app.route('/api/vendas', methods=['GET'])
def listar_vendas():
    try:
        user_id = get_current_user_id()
    except Exception as e:
        return jsonify({"error": str(e)}), 401
    
    response = supabase.table('movimentacoes') \
        .select('*, produtos(nome)') \
        .eq('user_id', user_id) \
        .eq('tipo', 'venda') \
        .order('data', desc=True) \
        .execute()
    return jsonify(response.data)

# Home

@app.route('/api/home', methods=['GET'])
def home():
    try:
        user_id = get_current_user_id()
    except Exception as e:
        return jsonify({"error": str(e)}), 401
    
    # Total de produtos
    total_prod = supabase.table('produtos').select('count', count='exact').eq('user_id', user_id).execute().count
    
    # Estoque crítico
    produtos = supabase.table('produtos').select('estoque_atual, estoque_minimo').eq('user_id', user_id).execute().data
    critico = sum(1 for p in produtos if p['estoque_atual'] <= p.get('estoque_minimo', 5))
    
    # Faturamento total
    vendas = supabase.table('movimentacoes') \
        .select('quantidade, preco_unitario') \
        .eq('user_id', user_id) \
        .eq('tipo', 'venda') \
        .execute().data
    faturamento = sum(v['quantitade'] * (v['preco_unitario'] or 0) for v in vendas)
    
    # Ultimas 3 vendas
    ultimas = supabase.table('movimentcoes') \
        .select('*, produtos(nome)') \
        .eq('user_id', user_id) \
        .eq('tipo', 'venda') \
        .order('data', desc=True) \
        .limit(3) \
        .execute().data
        
    return jsonify({
        "total_produtos": total_prod,
        "faturamento": round(faturamento, 2),
        "estoque_critico": critico,
        "vendas_no_mes": len(vendas),
        "ultimas_vendas": ultimas
    })
    
# RODAR O SERVIDOR
if __name__ == '__main__':
    app.run(debug=True, port=5000)

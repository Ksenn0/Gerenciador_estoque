function abrirModal() {
    document.getElementById('modal').style.display = 'flex'
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none'
}

function cadastrarProduto() {
    const nome = document.getElementById('nomeProduto').value
    const categoria = document.getElementById('categoriaProduto').value
    const preco = document.getElementById('precoProduto').value
    const quantidade = document.getElementById('quantidadeProduto').value

    if (!nome || !categoria || !preco || !quantidade) {
        alert('Preencha todos os campos!')
        return
    }

    alert('Produto ' + nome + ' cadastrado com sucesso!')
    fecharModal()
}

function renderProdutos() {
    document.getElementById('app').innerHTML = `

        <div class="page-header">
            <div>
                <h1 class="secao-titulo">Produtos</h1>
                <p class="texto">5 produtos cadastrados</p>
            </div>
            <button class="botao" onclick="abrirModal()">+ Novo Produto</button>
        </div>

        <div class="search">
            <span class="search-icone"><i class="bi bi-search"></i></span>
            <input type="text" placeholder="Buscar produto..." />
        </div>

        <div class="filtros">
            <button class="filtro active">Todos</button>
            <button class="filtro"><i class="bi bi-check-circle"></i> Normal</button>
            <button class="filtro"><i class="bi bi-exclamation-circle"></i> Crítico</button>
        </div>

        <div class="produtos-grid">

            <div class="produto-card">
                <div class="produto-img">
                    <img src="assets/Camisa.jpg" alt="Camiseta" />
                </div>
                <div class="produto-info">
                    <p class="produto-nome">Camiseta Básica</p>
                    <p class="produto-preco">R$ 49,90</p>
                    <div class="produto-bottom">
                        <span class="produto-qtd">8 un</span>
                        <span class="badge badge-green">OK</span>
                    </div>
                </div>
            </div>

            <div class="produto-card critico">
                <div class="produto-img">
                    <div class="critico-flag"><i class="bi bi-exclamation-triangle"></i> BAIXO</div>
                    <img src="assets/Boné.jpg" alt="Boné" />
                </div>
                <div class="produto-info">
                    <p class="produto-nome">Boné Cap</p>
                    <p class="produto-preco">R$ 39,90</p>
                    <div class="produto-bottom">
                        <span class="produto-qtd">2 un</span>
                        <span class="badge badge-red">Crítico</span>
                    </div>
                </div>
            </div>

            <div class="produto-card">
                <div class="produto-img">
                    <img src="assets/Tenis.jpg" alt="Tênis" />
                </div>
                <div class="produto-info">
                    <p class="produto-nome">Tênis Sport</p>
                    <p class="produto-preco">R$ 189,90</p>
                    <div class="produto-bottom">
                        <span class="produto-qtd">12 un</span>
                        <span class="badge badge-green">OK</span>
                    </div>
                </div>
            </div>

            <div class="produto-card critico">
                <div class="produto-img">
                    <div class="critico-flag"><i class="bi bi-exclamation-triangle"></i> BAIXO</div>
                    <img src="assets/Calça jeans.jpg" alt="Calça Jeans" />
                </div>
                <div class="produto-info">
                    <p class="produto-nome">Calça Jeans</p>
                    <p class="produto-preco">R$ 129,90</p>
                    <div class="produto-bottom">
                        <span class="produto-qtd">3 un</span>
                        <span class="badge badge-red">Crítico</span>
                    </div>
                </div>
            </div>

            <div class="produto-card">
                <div class="produto-img">
                    <img src="assets/Mochila.jpg" alt="Mochila" />
                </div>
                <div class="produto-info">
                    <p class="produto-nome">Mochila</p>
                    <p class="produto-preco">R$ 99,90</p>
                    <div class="produto-bottom">
                        <span class="produto-qtd">6 un</span>
                        <span class="badge badge-green">OK</span>
                    </div>
                </div>
            </div>

        </div>

        <div class="modal" id="modal">
            <div class="modal-conteudo">

                <div class="modal-header">
                    <h2>Cadastrar Produto</h2>
                    <button onclick="fecharModal()">✕</button>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label>Nome do produto</label>
                        <input type="text" class="form-control" id="nomeProduto" placeholder="Ex: Camiseta Básica" />
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Categoria</label>
                            <input type="text" class="form-control" id="categoriaProduto" placeholder="Ex: Roupas" />
                        </div>
                        <div class="form-group">
                            <label>Preço</label>
                            <input type="number" class="form-control" id="precoProduto" placeholder="0,00" />
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Quantidade</label>
                            <input type="number" class="form-control" id="quantidadeProduto" placeholder="0" />
                        </div>
                        <div class="form-group">
                            <label>Estoque mínimo</label>
                            <input type="number" class="form-control" id="minimoProduto" placeholder="5" />
                        </div>
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="botao-saida" onclick="fecharModal()">Cancelar</button>
                    <button class="botao" onclick="cadastrarProduto()">+ Cadastrar</button>
                </div>

            </div>
        </div>

    `
}
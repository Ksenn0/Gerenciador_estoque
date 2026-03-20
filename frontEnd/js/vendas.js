function abrirModalVenda() {
    document.getElementById('modalVenda').style.display = 'flex'
}

function fecharModalVenda() {
    document.getElementById('modalVenda').style.display = 'none'
}

function calcularTotal() {
    const quantidade = document.getElementById('vendaQuantidade').value
    const preco = document.getElementById('vendaPreco').value
    const total = quantidade * preco
    document.getElementById('vendaTotal').textContent = 'Total: R$ ' + total.toFixed(2)
}

function registrarVenda() {
    const produto = document.getElementById('vendaProduto').value
    const cliente = document.getElementById('vendaCliente').value
    const quantidade = document.getElementById('vendaQuantidade').value
    const preco = document.getElementById('vendaPreco').value

    if (!produto || !cliente || !quantidade || !preco) {
        alert('Preencha todos os campos!')
        return
    }

    alert('Venda de ' + produto + ' registrada com sucesso!')
    fecharModalVenda()
}

function renderVendas() {
    document.getElementById('app').innerHTML = `

        <div class="page-header">
            <div>
                <h1 class="secao-titulo">Vendas</h1>
                <p class="texto">5 vendas Registradas</p>
            </div>
            <button class="botao" onclick="abrirModalVenda()">+ Registrar</button>
        </div>

        <div class="cards-container">
            <div class="cards">
                <h2>Faturamento</h2>
                <p>R$ 797</p>
            </div>
            <div class="cards">
                <h2>Ticket médio</h2>
                <p>R$ 153,82</p>
            </div>
            <div class="cards">
                <h2>Itens vendidos</h2>
                <p>9 uni</p>
            </div>
        </div>

        <div class="search">
            <span class="search-icone"><i class="bi bi-search"></i></span>
            <input type="text" placeholder="Buscar por produto ou cliente..." />
        </div>

        <h3 class="secao-titulo">Histórico de Vendas</h3>

        <div class="venda-item">
            <div class="venda-icone"><i class="bi bi-cart"></i></div>
            <div class="venda-info">
                <p class="venda-nome">Camiseta Básica</p>
                <p class="venda-detalhe">
                    <i class="bi bi-person"></i> João Silva ·
                    <i class="bi bi-calendar"></i> 12/03 ·
                    <i class="bi bi-box2"></i> 2 un
                </p>
            </div>
            <div class="venda-valor">
                <p class="venda-total">R$ 99,80</p>
                <p class="venda-unidade">R$ 49,90/un</p>
            </div>
        </div>

        <div class="venda-item">
            <div class="venda-icone"><i class="bi bi-cart"></i></div>
            <div class="venda-info">
                <p class="venda-nome">Tênis de Corrida</p>
                <p class="venda-detalhe">
                    <i class="bi bi-person"></i> Maria Sousa ·
                    <i class="bi bi-calendar"></i> 14/03 ·
                    <i class="bi bi-box2"></i> 1 un
                </p>
            </div>
            <div class="venda-valor">
                <p class="venda-total">R$ 190,70</p>
                <p class="venda-unidade">R$ 190,70/un</p>
            </div>
        </div>

        <div class="venda-item">
            <div class="venda-icone"><i class="bi bi-cart"></i></div>
            <div class="venda-info">
                <p class="venda-nome">Calça Jeans</p>
                <p class="venda-detalhe">
                    <i class="bi bi-person"></i> Pedro Costa ·
                    <i class="bi bi-calendar"></i> 15/03 ·
                    <i class="bi bi-box2"></i> 3 un
                </p>
            </div>
            <div class="venda-valor">
                <p class="venda-total">R$ 259,40</p>
                <p class="venda-unidade">R$ 86,47/un</p>
            </div>
        </div>

        <div class="modal" id="modalVenda">
            <div class="modal-conteudo">

                <div class="modal-header">
                    <h2>Registrar Venda</h2>
                    <button onclick="fecharModalVenda()">✕</button>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label>Produto</label>
                        <select class="form-control" id="vendaProduto">
                            <option value="">Selecione um produto...</option>
                            <option>Camiseta Básica</option>
                            <option>Boné Cap</option>
                            <option>Tênis Sport</option>
                            <option>Calça Jeans</option>
                            <option>Mochila</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Cliente</label>
                        <input type="text" class="form-control" id="vendaCliente" placeholder="Nome do cliente" />
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Quantidade</label>
                            <input type="number" class="form-control" id="vendaQuantidade" placeholder="0" oninput="calcularTotal()" />
                        </div>
                        <div class="form-group">
                            <label>Preço unitário</label>
                            <input type="number" class="form-control" id="vendaPreco" placeholder="0,00" oninput="calcularTotal()" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Data</label>
                        <input type="date" class="form-control" id="vendaData" />
                    </div>
                    <p id="vendaTotal" style="font-family:'Syne',sans-serif;font-size:18px;font-weight:700;color:var(--laranja);margin-top:8px">Total: R$ 0,00</p>
                </div>

                <div class="modal-footer">
                    <button class="botao-saida" onclick="fecharModalVenda()">Cancelar</button>
                    <button class="botao" onclick="registrarVenda()"><i class="bi bi-check-circle"></i> Confirmar</button>
                </div>

            </div>
        </div>

    `
}
function abrirModalEntrada() {
    document.getElementById('modalEstoque').style.display = 'flex'
    document.getElementById('tipoMovimentacao').textContent = 'Entrada'
    document.getElementById('btnConfirmarEstoque').className = 'botao-entrada'
    document.getElementById('btnConfirmarEstoque').textContent = '+ Confirmar Entrada'
}

function abrirModalSaida() {
    document.getElementById('modalEstoque').style.display = 'flex'
    document.getElementById('tipoMovimentacao').textContent = 'Saída'
    document.getElementById('btnConfirmarEstoque').className = 'botao-saida'
    document.getElementById('btnConfirmarEstoque').textContent = '− Confirmar Saída'
}

function fecharModalEstoque() {
    document.getElementById('modalEstoque').style.display = 'none'
}

function confirmarMovimentacao() {
    const produto = document.getElementById('estoqueProduto').value
    const quantidade = document.getElementById('estoqueQuantidade').value
    const obs = document.getElementById('estoqueObs').value
    const tipo = document.getElementById('tipoMovimentacao').textContent

    if (!produto || !quantidade) {
        alert('Preencha produto e quantidade!')
        return
    }

    alert(tipo + ' de ' + quantidade + ' un de ' + produto + ' registrada!')
    fecharModalEstoque()
}

function renderEstoque() {
    document.getElementById('app').innerHTML = `

        <div class="page-header">
            <div>
                <h1 class="secao-titulo">Estoque</h1>
                <p class="texto">Controle de entrada e saída de produtos</p>
            </div>
            <div style="display:flex;gap:10px">
                <button class="botao-entrada" onclick="abrirModalEntrada()">+ Entrada</button>
                <button class="botao-saida" onclick="abrirModalSaida()">− Saída</button>
            </div>
        </div>

        <div class="card-secao" style="margin-top:24px">
            <h3 class="secao-titulo">Estoque Atual</h3>
            <table class="tabela">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Categoria</th>
                        <th>Quantidade</th>
                        <th>Mínimo</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>👕 Camiseta Básica</td>
                        <td>Roupas</td>
                        <td>8</td>
                        <td>5</td>
                        <td><span class="badge badge-green">Normal</span></td>
                    </tr>
                    <tr>
                        <td>🧢 Boné Cap</td>
                        <td>Acessórios</td>
                        <td style="color:#ef4444">2</td>
                        <td>5</td>
                        <td><span class="badge badge-red">Crítico</span></td>
                    </tr>
                    <tr>
                        <td>👟 Tênis Sport</td>
                        <td>Calçados</td>
                        <td>12</td>
                        <td>3</td>
                        <td><span class="badge badge-green">Normal</span></td>
                    </tr>
                    <tr>
                        <td>👖 Calça Jeans</td>
                        <td>Roupas</td>
                        <td style="color:#eab308">3</td>
                        <td>5</td>
                        <td><span class="badge badge-yellow">Atenção</span></td>
                    </tr>
                    <tr>
                        <td>🎒 Mochila</td>
                        <td>Acessórios</td>
                        <td>6</td>
                        <td>2</td>
                        <td><span class="badge badge-green">Normal</span></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="card-secao" style="margin-top:24px">
            <h3 class="secao-titulo">Histórico de Movimentações</h3>

            <div class="mov-item">
                <div class="mov-dot entrada"></div>
                <div class="mov-info">
                    <p class="mov-nome">Camiseta Básica</p>
                    <p class="mov-data">10/03 · Reposição</p>
                </div>
                <div class="mov-qtd entrada">+10</div>
            </div>

            <div class="mov-item">
                <div class="mov-dot saida"></div>
                <div class="mov-info">
                    <p class="mov-nome">Calça Jeans</p>
                    <p class="mov-data">15/03 · Venda</p>
                </div>
                <div class="mov-qtd saida">-2</div>
            </div>

            <div class="mov-item">
                <div class="mov-dot entrada"></div>
                <div class="mov-info">
                    <p class="mov-nome">Tênis Sport</p>
                    <p class="mov-data">14/03 · Compra fornecedor</p>
                </div>
                <div class="mov-qtd entrada">+5</div>
            </div>

        </div>

        <div class="modal" id="modalEstoque">
            <div class="modal-conteudo">

                <div class="modal-header">
                    <h2 id="tipoMovimentacao">Entrada</h2>
                    <button onclick="fecharModalEstoque()">✕</button>
                </div>

                <div class="modal-body">
                    <div class="form-group">
                        <label>Produto</label>
                        <select class="form-control" id="estoqueProduto">
                            <option value="">Selecione um produto...</option>
                            <option>Camiseta Básica</option>
                            <option>Boné Cap</option>
                            <option>Tênis Sport</option>
                            <option>Calça Jeans</option>
                            <option>Mochila</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Quantidade</label>
                        <input type="number" class="form-control" id="estoqueQuantidade" placeholder="0" />
                    </div>
                    <div class="form-group">
                        <label>Observação</label>
                        <input type="text" class="form-control" id="estoqueObs" placeholder="Ex: Reposição, Venda..." />
                    </div>
                </div>

                <div class="modal-footer">
                    <button class="botao-saida" onclick="fecharModalEstoque()">Cancelar</button>
                    <button id="btnConfirmarEstoque" class="botao-entrada" onclick="confirmarMovimentacao()">+ Confirmar Entrada</button>
                </div>

            </div>
        </div>

    `
}
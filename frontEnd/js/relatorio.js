// relatorio.js — conteúdo da página Relatório

function exportarCSV() {
    const dados = [
        ['Data', 'Produto', 'Cliente', 'Quantidade', 'Total'],
        ['12/03', 'Camiseta Básica', 'João Silva', '2', 'R$ 99,80'],
        ['14/03', 'Tênis Sport', 'Maria Sousa', '1', 'R$ 189,90'],
        ['15/03', 'Calça Jeans', 'Pedro Costa', '2', 'R$ 259,40'],
        ['16/03', 'Mochila', 'Ana Lima', '1', 'R$ 99,90'],
        ['17/03', 'Boné Cap', 'Carlos R.', '3', 'R$ 119,70'],
    ]

    const csv = dados.map(linha => linha.join(';')).join('\n')
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'relatorio_marco_2026.csv'
    a.click()
}

function renderRelatorios() {
    document.getElementById('app').innerHTML = `

        <div class="page-header">
            <div>
                <h1 class="secao-titulo">Relatório</h1>
                <p class="texto">Março 2026</p>
            </div>
            <button class="botao" onclick="exportarCSV()">📥 Exportar CSV</button>
        </div>

        <div class="cards-container">
            <div class="cards">
                <h2>Faturamento</h2>
                <p style="color:#22c55e">R$ 797</p>
            </div>
            <div class="cards">
                <h2>Vendas</h2>
                <p>5</p>
            </div>
            <div class="cards">
                <h2>Itens Vendidos</h2>
                <p>9 un</p>
            </div>
            <div class="cards">
                <h2>Ticket Médio</h2>
                <p>R$ 153</p>
            </div>
        </div>

        <div class="home-grid" style="margin-bottom:24px">

            <div class="card-secao">
                <h3 class="secao-titulo">Vendas por dia</h3>
                <canvas id="graficoRelatorio"></canvas>
            </div>

            <div class="card-secao">
                <h3 class="secao-titulo">Top Produtos</h3>

                <div class="mov-item">
                    <div class="mov-info">
                        <p class="mov-nome">1º Calça Jeans</p>
                        <p class="mov-data">2 vendas</p>
                    </div>
                    <div class="mov-qtd entrada">R$ 259,80</div>
                </div>

                <div class="mov-item">
                    <div class="mov-info">
                        <p class="mov-nome">2º Tênis Sport</p>
                        <p class="mov-data">1 venda</p>
                    </div>
                    <div class="mov-qtd entrada">R$ 189,90</div>
                </div>

                <div class="mov-item">
                    <div class="mov-info">
                        <p class="mov-nome">3º Camiseta Básica</p>
                        <p class="mov-data">2 vendas</p>
                    </div>
                    <div class="mov-qtd entrada">R$ 99,80</div>
                </div>

            </div>

        </div>

        <div class="card-secao">
            <h3 class="secao-titulo">Todas as Vendas</h3>
            <table class="tabela">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Produto</th>
                        <th>Cliente</th>
                        <th>Qtd</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>12/03</td>
                        <td>Camiseta Básica</td>
                        <td>João Silva</td>
                        <td>2</td>
                        <td style="color:#22c55e">R$ 99,80</td>
                    </tr>
                    <tr>
                        <td>14/03</td>
                        <td>Tênis Sport</td>
                        <td>Maria Sousa</td>
                        <td>1</td>
                        <td style="color:#22c55e">R$ 189,90</td>
                    </tr>
                    <tr>
                        <td>15/03</td>
                        <td>Calça Jeans</td>
                        <td>Pedro Costa</td>
                        <td>2</td>
                        <td style="color:#22c55e">R$ 259,40</td>
                    </tr>
                    <tr>
                        <td>16/03</td>
                        <td>Mochila</td>
                        <td>Ana Lima</td>
                        <td>1</td>
                        <td style="color:#22c55e">R$ 99,90</td>
                    </tr>
                    <tr>
                        <td>17/03</td>
                        <td>Boné Cap</td>
                        <td>Carlos R.</td>
                        <td>3</td>
                        <td style="color:#22c55e">R$ 119,70</td>
                    </tr>
                </tbody>
            </table>
        </div>

    `

    const ctx = document.getElementById('graficoRelatorio').getContext('2d')
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['12/03', '13/03', '14/03', '15/03', '16/03', '17/03', '18/03'],
            datasets: [{
                label: 'Vendas R$',
                data: [99.80, 0, 189.90, 259.40, 0, 99.90, 119.70],
                borderColor: '#E66F5C',
                backgroundColor: 'rgba(230, 111, 92, 0.1)',
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#E66F5C',
                pointRadius: 5,
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                x: { ticks: { color: '#f1f5f9' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#f1f5f9' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
        }
    })
}
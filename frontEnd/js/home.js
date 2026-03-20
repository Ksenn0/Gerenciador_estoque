// home.js — conteúdo da página Home
function renderHome() {
    document.getElementById('app').innerHTML = `

        <div class="alerta">
            <p>⚠ 2 produtos com estoque baixo!</p>
        </div>
           <div class="cards-container">
            <div class="cards">
                <h2>Total Produtos</h2>
                <p>5</p>
            </div>
            <div class="cards">
                <h2>Faturamento</h2>
                <p>R$ 797</p>
            </div>
            <div class="cards">
                <h2>Estoque Crítico</h2>
                <p>2</p>
            </div>
            <div class="cards">
                <h2>Vendas no mês</h2>
                <p>5</p>
            </div>
        </div>

        <div class="home-grid">

            <div class="card-secao">
                <h3 class="secao-titulo">Vendas por dia</h3>
                <canvas id="graficoVendas"></canvas>
            </div>

            <div class="card-secao">
                <h3 class="secao-titulo">Últimas Vendas</h3>
                <div class="venda-item">
                    <div class="venda-icone"><i class="bi bi-cart"></i></div>
                    <div class="venda-info">
                        <p class="venda-nome">Camiseta Básica</p>
                        <p class="venda-detalhe"><i class="bi bi-person"></i> João Silva · <i class="bi bi-calendar"></i> 12/03</p>
                    </div>
                    <div class="venda-valor">
                        <p class="venda-total">R$ 99,80</p>
                    </div>
                </div>

                <div class="venda-item">
                    <div class="venda-icone"><i class="bi bi-cart"></i></div>
                    <div class="venda-info">
                        <p class="venda-nome">Tênis de Corrida</p>
                        <p class="venda-detalhe"><i class="bi bi-person"></i> Maria Sousa · <i class="bi bi-calendar"></i> 14/03</p>
                    </div>
                    <div class="venda-valor">
                        <p class="venda-total">R$ 190,70</p>
                    </div>
                </div>

                <div class="venda-item">
                    <div class="venda-icone"><i class="bi bi-cart"></i></div>
                    <div class="venda-info">
                        <p class="venda-nome">Calça Jeans</p>
                        <p class="venda-detalhe"><i class="bi bi-person"></i> Pedro Costa · <i class="bi bi-calendar"></i> 15/03</p>
                    </div>
                    <div class="venda-valor">
                        <p class="venda-total">R$ 259,40</p>
                    </div>
                </div>
            </div>

        </div>

    `
    const ctx = document.getElementById('graficoVendas').getContext('2d')

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['12/03', '13/03', '14/03', '15/03', '16/03', '17/03', '18/03'],
            datasets: [{
                label: 'Vendas R$',
                data: [99.80, 0, 189.90, 259.40, 0, 99.90, 119.70],
                backgroundColor: 'rgba(230, 111, 92, 0.3)',
                borderColor: '#E66F5C',
                borderWidth: 2,
                borderRadius: 6,
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: { ticks: { color: '#f1f5f9' }, grid: { color: 'rgba(255,255,255,0.05)' } },
                y: { ticks: { color: '#f1f5f9' }, grid: { color: 'rgba(255,255,255,0.05)' } }
            }
        }
    })

}
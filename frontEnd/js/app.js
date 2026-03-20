// app.js — controla a navegação entre páginas
function navegarPara(pagina) {

    document.querySelectorAll('.nav-bar a').forEach(function(link) {
        link.classList.remove('ativo')
    })

    document.querySelector(`[onclick="navegarPara('${pagina}')"]`).classList.add('ativo')

    if (pagina === 'vendas') {
        renderVendas()
    } else if (pagina === 'home') {
        renderHome()
    } else if (pagina === 'produtos') {
        renderProdutos()
    } else if (pagina === 'estoque') {
        renderEstoque()
    } else if (pagina === 'relatorios') {
        renderRelatorios()
    }
}

navegarPara('home')
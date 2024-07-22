let totalGeral = 0;
let carrinho = document.getElementById('lista-produtos').innerHTML = '';
let precoCarrinhoTotal = document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade <= 0){
        alert("Insira uma quantidade válida.");
        return;
    }
    
    let preco = quantidade * valorUnitario;
    carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}X</span> ${nomeProduto}<span class="texto-azul">R$${preco}</span> </section>`;

    totalGeral = totalGeral + preco;
    precoCarrinhoTotal = document.getElementById('valor-total');
    precoCarrinhoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0;
    
}

function limpar(){
    totalGeral = 0;
    carrinho = document.getElementById('lista-produtos').innerHTML = '';
    precoCarrinhoTotal = document.getElementById('valor-total').textContent = 'R$ 0';
    quantidade = document.getElementById('quantidade').value;
}
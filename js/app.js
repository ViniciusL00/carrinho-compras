let valorTotal;
limpar();

function adicionar () {
        //Recuperar valores, nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

     // Verificar se o produto foi selecionado
     if (!produto || produto.trim() === "") {
        alert("Por favor, selecione um produto válido.");
        return; // Interrompe a função se não houver produto selecionado
    }

    // Verificar se a quantidade é válida (número e maior que zero)
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Por favor, insira uma quantidade válida (um número maior que zero).");
        return; // Interrompe a função se a quantidade for inválida
    }

        //Calcular o preço, subtotal
    let preco = quantidade * valorUnitario;
    let listaProdutos = document.getElementById('lista-produtos');

        //Adicionar no carrinho
    listaProdutos.innerHTML = listaProdutos.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section>`;

    //Atualizar o valor total
    valorTotal = valorTotal + preco;
    let total = document.getElementById('valor-total');
    total.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;

}

function limpar () {
    valorTotal = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}
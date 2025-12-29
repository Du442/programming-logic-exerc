let totalValue = 0;

function adicionar() {
    //obter e formatar dados
    let chosedProduct = document.getElementById('produto').value;
    let quantity = document.getElementById('quantidade').value;
    let unityValue = chosedProduct.split('R$')[1];
    let productName = chosedProduct.split('-')[0];

    //calculo do valor
    let subTotal = unityValue * quantity;

    //adicionando ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    if(quantity > 0) {
        carrinho.innerHTML = carrinho.innerHTML + `
            <section class="carrinho__produtos__produto">
                <span class="texto-azul">${quantity}x</span> ${productName} <span class="texto-azul">R$${subTotal}</span>
            </section>`;
    //calculo valor total carrinho
        totalValue += subTotal;
        let showTotalValue = document.getElementById('valor-total');
        showTotalValue.textContent = `R$${totalValue}`; 
        document.getElementById('quantidade').value = 0;
    } else{
        alert('Erro de compilação');
    }    
}

function limpar() {

    totalValue = 0;
    document.getElementById('quantidade').value = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$${totalValue}`;

}
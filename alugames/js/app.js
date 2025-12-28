function alterarStatus(id) {

    //recupera o elemento html especifico usando o id (game- + o numero)
    let gameChosed = document.getElementById('game-' + id);

    //dentro do jogo escolhido ai ele recupera a imagem e o botao que foi pressionado anteriormente
    let imagem = gameChosed.querySelector('.dashboard__item__img');
    let botao = gameChosed.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {
        let resposta = prompt('Deseja mesmo devolver o jogo? s/n');

        if (resposta === "s" || resposta === "S") {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = `Alugar`;
        } else {

        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = `Devolver`;
    }

}

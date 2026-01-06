function sortear() {
    //função de pegar o que foi digitado nos respectivos campos declarados por id
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numero;
    //array para armazenar possiveis numeros a serem gerados
    let sorteados = [];

    //loop com o intuito de gerar numeros conforme a quantidade que foi solicitada
    for (let i = 0; i < quantidade; i++) {
        numero = getRandomNumber(de, ate);

        //loop dentro de outro loop para impedir que haja repetição de numeros
        while (sorteados.includes(numero)) {
            numero = getRandomNumber(de, ate);
        }

        sorteados.push(numero);
    }

    //document para pegar a tag
    let resultado = document.getElementById('resultado');
    //element para modificar visualmente na pagina quais numeros finais foram gerados
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    changeStatusButton();
}

//gerador de numeros aleatorios
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//função de mudar a cor do botao tornando o acessivel para clicar
function changeStatusButton() {
    let btn = document.getElementById('btn-reiniciar');
    if (btn.classList.contains('container__botao-desabilitado')) {
        btn.classList.remove('container__botao-desabilitado');
        btn.classList.add('container__botao')
    } else {
        btn.classList.remove('container__botao');
        btn.classList.add('container__botao-desabilitado');
    }
}

//funcao para reiniciar a pagina
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';

    sorteados = [];
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    changeStatusButton();
}
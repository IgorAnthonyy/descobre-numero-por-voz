const menorValor = 1
const maiorValor = 1000
const nmrSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * maiorValor)
}
console.log('Numero sorteado:', nmrSecreto );

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor;
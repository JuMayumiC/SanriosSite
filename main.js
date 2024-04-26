const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-05-20T00:00:00");


const tempos = [tempoObjetivo1];
//contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    } else {
        return [0,0,0,0];
    }
}

function atualizaCronometro(){
    document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
    document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
    document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
    document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];

    for (let i=0; i<contadores.length;i++){
      //  contadores[i].textContent = calculaTempo(tempoObjetivo1[i]);   
    }
}

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();


let nomeUsuario = "";
let anterior = document.querySelector('#texto');
let joguinhoButton = document.getElementById("joguinhoButton");

joguinhoButton.addEventListener("click", function() {
    while (nomeUsuario == ""){
        nomeUsuario = prompt('Qual é o seu nome??');
    }

    if (nomeUsuario == null){
        anterior.textContent = '';
    } else {
        anterior.textContent = nomeUsuario;
    }
});

// Código do jogo de adivinhação
let numeroSecreto;
let chute = '';

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 10);
    console.log(numeroSecreto);
    
    while (chute == '') {
        chute = prompt('Escolha um número de 0 a 10');
    }
    
    if (parseInt(chute) === numeroSecreto) {
        alert('Parabéns! Você é incrível.');
        console.log('Parabéns, acertou!');
    } else {
        alert('Errou, que pena.');
        console.log('Infelizmente, errou!');
    }
}

// Adicionando evento de clique para iniciar o jogo quando o botão for clicado
document.getElementById("iniciarJogoButton").addEventListener("click", iniciarJogo);

// Reiniciar o jogo de adivinhação
function reiniciarJogo() {
    numeroSecreto = null;
    chute = '';
} 


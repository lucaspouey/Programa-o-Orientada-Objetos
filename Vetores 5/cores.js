const prompt= require("prompt-sync")();

let cor = prompt("Escolha uma cor: ")

let cores = ["azul", "preto", "branco", "cinza", "amarelo"];

let posicao = cores.indexOf(cor)

if (posicao != -1) {

    console.log(`A cor escolhida foi ${cor} e está na posição ${posicao}`)
}

else {console.log (`A cor ${cor} não foi encontrada.`) }







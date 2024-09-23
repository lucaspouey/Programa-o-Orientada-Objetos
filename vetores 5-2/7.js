//Crie um script que recebe um vetor de qualquer tamanho e qual número e retorna a média dos seus elementos.

let vetor = [13, 42, 23, 44, 25, 66, 87, 28, 99, 10];
let soma = 0;
for (let i = 0; i < vetor.length; i++) {
  soma += vetor[i];
}
let mediaVetor = soma / vetor.length;
console.log(mediaVetor);
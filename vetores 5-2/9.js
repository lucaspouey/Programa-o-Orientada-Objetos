//Preencher um vetor de n elementos com "Ímpar" se o índice do elemento for ímpar, e "Par" se for par. Escrever o vetor após o seu total preenchimento.let n = 10; // tamanho do vetor

let vetor = 10;
let criarVetor = new Array(vetor);

for (let i = 0; i < vetor; i++) {
  if (i % 2 === 0) {
    criarVetor[i] = "Par";
  } else {
    criarVetor[i] = "Ímpar";
  }
}

console.log(criarVetor);
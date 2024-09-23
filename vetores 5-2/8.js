//Crie um script que recebe um vetor e um elemento, e retorna true se o elemento estiver presente no vetor, caso contrário, retorna false.

let vetor = [10, 20, 30, 40, 50, 60, 70];
let elemento = 62;

let resultado = false;
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === elemento) {
    resultado = true;
    break;
  }
}
console.log(resultado); 

//no caso indiquei um elemento que não está presente no vetor, e retornou false.
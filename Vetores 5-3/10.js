//Encontrar a pessoa mais velha. Dado um vetor de objetos com pessoas (com `nome` e `idade`), use `reduce` para encontrar a pessoa mais velha.
let pessoas = [
    { nome: 'Lucas', idade: 30 },
    { nome: 'Érica', idade: 45 },
    { nome: 'João Vitor', idade: 28 },
    { nome: 'Gérson', idade: 50 },
];

let maisVelha = pessoas.reduce((maisVelha, pessoaAtual) => 
    pessoaAtual.idade > maisVelha.idade ? pessoaAtual : maisVelha, 
    pessoas[0]);

console.log(maisVelha);
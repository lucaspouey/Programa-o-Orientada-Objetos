//Transformar lista de objetos em string. Usando `map`, transforme um vetor de objetos (com `nome` e `idade`) em um vetor de strings formatadas como `"Nome: X, Idade: Y"`.
let pessoas = [
    { nome: 'Lucas', idade: 30 },
    { nome: 'João Vitor', idade: 25 },
    { nome: 'Érica', idade: 40 },
];

let formatado = pessoas.map(pessoa => `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);

console.log(formatado);
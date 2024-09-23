//Filtrar alunos aprovados. Dado um vetor de objetos representando alunos (com `nome` e `nota`), use `filter` para retornar apenas os alunos com nota maior que 7.

let alunos = [

    {Nome: "José", Nota: 4.3}, 
    {Nome: "João", Nota: 6.2}, 
    {Nome: "Marta", Nota: 7.0},
    {Nome: "Maria", Nota: 8.0},
    {Nome: "Felipe", Nota: 9.5},

]

let aprovados= alunos.filter(alunos => alunos.Nota >= 7.0)
 
console.log(aprovados)
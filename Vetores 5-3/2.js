//Calcular a média de idade. Dado um vetor de objetos
//com pessoas (com `nome`, `idade` e `profissao`), utilize
//`reduce` para calcular a média de idade das pessoas.

let pessoas = [
    {Nome: "José", Idade: 43, Profissão: "Marceneiro"},
    {Nome: "João", Idade: 32, Profissão: "Cozinheiro"},
    {Nome: "Marta", Idade: 30, Profissão: "Advogada"},
    {Nome: "Maria", Idade: 50, Profissão: "Médica"},
    {Nome: "Felipe", Idade: 25, Profissão: "Programador"},
]

let somaDasIdades = pessoas.reduce((acc, pessoa) => acc + pessoa.Idade, 0)

console.log(`A soma de todas as idade é ${somaDasIdades}.`)

let media = somaDasIdades / pessoas.length

console.log(` E a média da idade das pessoas é ${media}.`)

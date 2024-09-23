//Ler um vetor de 10 nomes. Entrar com  o nome de uma pessoa pelo prompt. Escrever a mensagem “ACHEI” se o nome estiver no vetor e “NÃO ACHEI” caso contrário.
const prompt = require("prompt-sync")();

let nomes = ["João Vitor", "Érica Jahnke", "Lucas Pouey", "Lucas Almeida", "Lucas Freitas"];
let nomePessoa = (prompt("Digite o nome de uma pessoa: "));
let resultado = nomes.includes(nomePessoa) ? "ACHEI" : "NÃO ACHEI";

console.log (resultado);
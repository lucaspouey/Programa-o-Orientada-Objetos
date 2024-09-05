const prompt = require("prompt-sync")();
const velocidade = prompt("Digite a velocidade do veículo (km/h): ");
let mensagem;

if (velocidade <= 80) {
    mensagem = "O veículo está dentro do limite.";
} else if (velocidade > 80 && velocidade <= 100) {
    mensagem = "O veículo está acima do limite, multa leve.";
} else if (velocidade > 100) {
    mensagem = "O veículo está acima do limite, multa grave.";
} else {
    mensagem = "Velocidade inválida.";
}

console.log(mensagem);
let prompt = require("prompt-sync")()
let notaFinal = prompt("Digite a nota final (0 a 10):");
let conceito;

if (notaFinal >= 9 && notaFinal <= 10) {
    conceito = 'A';
} else if (notaFinal >= 7 && notaFinal < 9) {
    conceito = 'B';
} else if (notaFinal >= 5 && notaFinal < 7) {
    conceito = 'C';
} else if (notaFinal >= 3 && notaFinal < 5) {
    conceito = 'D';
} else if (notaFinal >= 0 && notaFinal < 3) {
    conceito = 'E';
} else {
    conceito = 'Nota inválida';
}

console.log ("O conceito da nota é: " + conceito);
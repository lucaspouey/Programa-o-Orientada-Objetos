const prompt = require("prompt-sync")()
const numero = Number(prompt("Insira o número aqui: ")); 
let Primo = true;

if (numero < 2 || numero > 100) {
    console.log('Por favor, insira um número entre 2 e 100.');
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }

    if (Primo) {
        console.log(numero + ' é um número primo.');
    } else {
        console.log(numero + ' não é um número primo.');
    }
}
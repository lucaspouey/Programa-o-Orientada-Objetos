const prompt = require('prompt-sync')();
let real = Number(prompt("Digite o valor que deseja converter: "))
let valor = Number(prompt('Selecione qual a conversão desejada 1 ou 2: '));


if (valor === 1) {
    resultado = real * 0.18
    console.log (resultado.toFixed(2))

} else if ( valor === 2) {
    resultado = real * 0.16
    console.log (resultado.toFixed(2))
} else { 
    console.log ("Opções válidas 1 e 2")
}
    




prompt = require('prompt-sync')()
const lado1 = Number(prompt("Digite o primeiro lado: "))
const lado2 = Number(prompt("Digite o segundo lado: "))
const lado3 = Number(prompt("Digite o terceiro lado: "))


if(lado1 === lado2 && lado2 == lado3) {
    console.log ("equilatero")
} else if (lado2 === lado3 || lado1 === lado3 || lado1 === lado2){
    console.log ("isosceles")
} else {
    console.log ("escaleno")
}
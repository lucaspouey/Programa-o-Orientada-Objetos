const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const resultado = document.querySelector(".resultado");
const input = document.querySelector("#class");

function adicao(){
    const result = Number(num1.value) + Number(num2.value) 
    resultado.textContent = `Resultado: ${result}`
    input.value = result
}
function subtracao(){
    const result = Number(num1.value) - Number(num2.value)
    resultado.textContent = `Resultado: ${result}`
}
function multiplicacao(){
    const result = Number(num1.value) * Number(num2.value)
    resultado.textContent = `Resultado: ${result}`
}
function divisao(){
    const result = Number(num1.value) / Number(num2.value)
    resultado.textContent = `Resultado: ${result}`
}
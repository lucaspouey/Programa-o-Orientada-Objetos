const prompt = require("prompt-sync")()
const ano = Number(prompt("Informe o ano em dias: "))

if (ano == 365){
    console.log("ano normal")

} else if (ano == 366){
    console.log("Ano bissexto")
}else {
    console.log("Digite um ano valido em dias!")
}
//Obter a soma total de preços. Dado um vetor de objetos representando produtos (com `nome` e `preco`), utilize `reduce` para calcular o valor total de todos os produtos.


let produtos = [

    {nome: "Malboro", preco: 9.50, categoria: "Cigarros"},
    {nome: "Stella", preco: 8.50, categoria: "Bebidas"},
    {nome: "Baly", preco: 15.00, categoria: "Bebidas"},
    {nome: "Wiston", preco: 5.50, categoria: "Cigarros"},
    {nome: "Vodka", preco: 9.00, categoria: "Bebidas"},
    {nome: "Vinho", preco: 15.00, categoria: "Bebidas"},
    {nome: "Doritos", preco: 5.50, categoria: "Comidas"},
    {nome: "Fandangos", preco: 5.50, categoria: "Bebidas"},
    {nome: "Coca cola", preco: 5.50, categoria: "Bebidas"},

];
 let soma = produtos.reduce((acc, produto) => acc + produto.preco, 0) 
 
 console.log(`A soma do valor de todos os produtos é: ${soma}`)

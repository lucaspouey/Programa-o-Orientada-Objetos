//Multiplicar valores de uma matriz por 2. Usando `map`, multiplique todos os valores de uma matriz (vetor de vetores) por 2.

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
 let dobro = produtos.map(produtos => produtos.preco * 2); 
 
 console.log(`O valor dobrado dos produtos é:`) 
    
 console.log (dobro);

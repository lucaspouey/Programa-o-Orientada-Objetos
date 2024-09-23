//Filtrar produtos por categoria. Usando `filter`, crie uma função que retorna apenas os produtos de uma categoria específica a partir de um vetor de produtos (com `nome`, `preco` e `categoria`).
let produtos = [
    
    {nome: "Malboro", preco: 9.50, categoria: "Cigarros"},
    {nome: "Stella", preco: 8.50, categoria: "Bebidas"},
    {nome: "Baly", preco: 15.00, categoria: "Bebidas"},
    {nome: "Wiston", preco: 5.50, categoria: "Cigarros"},
    {nome: "Vodka", preco: 9.00, categoria: "Bebidas"},
    {nome: "Vinho", preco: 15.00, categoria: "Bebidas"},
    {nome: "Doritos", preco: 5.50, categoria: "Comidas"},
    {nome: "Fandangos", preco: 5.50, categoria: "Comidas"},
    {nome: "Coca cola", preco: 5.50, categoria: "Bebidas"},

];

let filtrarPorCategoria = (produtos, categoria) => produtos.filter(produto => produto.categoria === categoria);
let produtosBebidas = filtrarPorCategoria(produtos, 'Bebidas');
console.log(produtosBebidas);
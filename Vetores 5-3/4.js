//Contar a ocorrência de categorias. Dado um vetor de
//objetos com produtos (com `nome`, `preco` e `categoria`),
//use `reduce` para contar quantos produtos existem em
//cada categoria.
let produtos = [

    {nome: "Malboro", preco: 6.50, categoria: "Cigarros"},
    {nome: "Stella", preco: 8.50, categoria: "Bebidas"},
    {nome: "Baly", preco: 15.00, categoria: "Bebidas"},
    {nome: "Wiston", preco: 5.50, categoria: "Cigarros"},
    {nome: "Vodka", preco: 9.00, categoria: "Bebidas"},
    {nome: "Vinho", preco: 15.00, categoria: "Bebidas"},
    {nome: "Doritos", preco: 5.50, categoria: "Comidas"},
    {nome: "Fandangos", preco: 5.50, categoria: "Bebidas"},
    {nome: "Coca cola", preco: 5.50, categoria: "Bebidas"},

];
 const contarCategoria = produtos.reduce((acumulador, current) => {
    if (!acumulador[current.categoria]) {
      acumulador[current.categoria] = 1;
    } else {
      acumulador[current.categoria]++;
    }
    return acumulador;
  }, {});
  
  console.log(contarCategoria);
 
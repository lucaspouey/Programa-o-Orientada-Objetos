//Agrupar produtos por preço. Dado um vetor de objetos representando produtos, utilize `reduce` para agrupar os produtos em duas categorias: os que custam mais de R$50 e os que custam menos ou igual a R$50.
let produtos = [
    {nome: "Malboro", preco: 40.00},
    {nome: "Stella", preco: 30.00},
    {nome: "Baly", preco: 65.00},
    {nome: "Wiston", preco: 55.50},
    {nome: "Vodka", preco: 90.00},
    {nome: "Vinho", preco: 150.00},
    {nome: "Doritos", preco: 5.50},
    {nome: "Fandangos", preco: 5.50},
    {nome: "Coca cola", preco: 5.50},
  ];
  
  let agrupados = produtos.reduce((acc, produto) => {
    acc[produto.preco > 50 ? 'acimaDe50' : 'ate50'].push(produto);
    return acc;
  }, { acimaDe50: [], ate50: [] });

  console.log(`Tabela de preços:`)
  console.log(agrupados);
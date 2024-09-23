//Adicionar um desconto aos produtos. Usando `map`,
//adicione um desconto de 10% a todos os produtos de
//um vetor de objetos (com `nome` e `preco`), criando um
//novo vetor com os produtos descontados.

let produtos = [

    {produto: "Cigarro", preco: 6.50},
    {produto: "Cerveja", preco: 8.50},
    {produto: "Kitão de cria", preco: 15.00},

]
console.log(produtos)
let desconto = produtos.map(produtos => produtos.preco * 10 / 100 );
let descontados = produtos.map((produtos, preco) => produtos.preco - desconto[preco]);
console.log(`Com desconto fica:`)
console.log(descontados)

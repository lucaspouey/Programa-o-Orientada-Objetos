let produtos = [
    {console : "PSone", preço: 50.00 },
    {console : "PS2", preço: 76.00 },
    {console : "PS3", preço: 110.00 },
    {console : "PS4", preço: 130.00 },
    {console : "PS5", preço: 150.00 }
];

let caros = produtos.filter (produto => produto.preço > 100)

console.log(caros)
//Concatenar listas de strings. Dado um vetor de vetores de strings, use `reduce` para concatenar todas as strings em uma única lista.
let lista = [
    ["tomate", "cebola"],
    ["cenoura", "salsa"],
    ["batata", "abóbora"],
    ["sal", "carne"]
  ];
  
  let concatenada = lista.reduce((acc, current) => acc.concat(current), []);
  
  console.log(concatenada);
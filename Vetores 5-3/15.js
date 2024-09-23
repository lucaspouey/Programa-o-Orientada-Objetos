//Filtrar e transformar valores de uma matriz.  Usando `map` e `filter`, crie um algorimot que filtre os números pares de uma matriz e multiplique-os por 3.
let matriz = [
    [40, 20, 30],
    [10, 55, 65],
    [72, 84, 92]
];

let resultado = matriz
    .flat()
    .filter(numero => numero % 2 === 0)
    .map(par => par * 3);
console.log (`O resultado multiplicado por 3 é:`)
console.log(resultado);
//Transformar vetor de nomes em um objeto. Usando
//`reduce`, transforme um vetor de nomes (ex.: `['Ana',
//'João', 'Pedro']`) em um objeto onde cada nome é uma
//chave e o valor é o comprimento do nome.

let nomes =  ["Lucas","João", "Érica"]

let objetos = nomes.reduce((acc, nomes) => {
    (acc[nomes]) = nomes.length;
    return acc;

},{})

console.log (objetos)



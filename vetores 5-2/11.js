//Crie uma matriz 3x3, calcule a soma de todos os seus elementos.

let matriz = [
    [100, 232, 345],
    [450, 556, 690],
    [790, 821, 934]
  ];
  
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  
  console.log(`A soma dos elementos da matriz é: ${soma}`);
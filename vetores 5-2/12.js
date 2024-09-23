//Crie uma matriz 2x3, encontre o maior valor presente na matriz.
let matriz = [
    [100, 232, 345],
    [450, 556, 690],
    [790, 821, 934]
  ];
let maiorValor = matriz[0][0];
    for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > maiorValor) {
        maiorValor = matriz[i][j];
      }
    }
  }
  
  console.log(`O maior valor presente na matriz é: ${maiorValor}`);

  //espero que tenha um jeito mais simples.

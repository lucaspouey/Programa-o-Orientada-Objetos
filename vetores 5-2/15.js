//Crie uma matriz identidade 3x3, substitua todos os elementos acima da diagonal principal por 0.
let matriz = new Array(3);

for (let i = 0; i < 3; i++) {
  matriz[i] = new Array(3);
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      matriz[i][j] = 1;
    } else if (i < j) {
      matriz[i][j] = 0;
    } else {
      matriz[i][j] = 0;
    }
  }
}

console.log(matriz);
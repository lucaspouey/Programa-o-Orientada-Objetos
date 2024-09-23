//Crie uma matriz identidade 3x3, onde os elementos da diagonal principal são 1 e o restante é 0.
let matriz = new Array(3);

for (let i = 0; i < 3; i++) {
  matriz[i] = new Array(3);
  for (let j = 0; j < 3; j++) {
    if (i === j) {
      matriz[i][j] = 1;
    } else {
      matriz[i][j] = 0;
    }
  }
}
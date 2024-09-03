const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a primeira nota: '));
const nota2 = Number(prompt('Digite a segunda nota: '));
const nota3 = Number(prompt('Digite a terceira nota: '));

const calcularMedia = (nota1, nota2, nota3) => {
    const media = (nota1 + nota2 + nota3) / 3;
    let resultado = '';

    if (media < 4) {
        resultado = 'Reprovado';
    } else if (media >= 4 && media < 7) {
        resultado = 'Em recuperação';
    } else {
        resultado = 'Aprovado';
    }

    return `Média: ${media.toFixed(2)} - ${resultado}`;
};

console.log(calcularMedia(nota1, nota2, nota3));
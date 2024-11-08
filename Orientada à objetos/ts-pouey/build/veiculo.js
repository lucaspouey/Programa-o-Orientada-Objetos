"use strict";
class Veiculo {
    marca;
    modelo;
    placa;
    cavalos;
    numeroMarchas;
    marchaAtual;
    velocidadeAtual;
    constructor(marca, modelo, placa, cavalos, numeroMarchas, marchaAtual, velocidadeAtual) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.cavalos = cavalos;
        this.numeroMarchas = numeroMarchas;
        this.marchaAtual = marchaAtual;
        this.velocidadeAtual = velocidadeAtual;
    }
    getMarca() {
        return this.marca;
    }
    setMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    setModelo() {
        return this.modelo;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca() {
        return this.placa;
    }
    getCavalos() {
        return this.cavalos;
    }
    setCavalos() {
        return this.cavalos;
    }
    getNumeroMarchas() {
        return this.numeroMarchas;
    }
    setNumeroMarchas() {
        return this.numeroMarchas;
    }
    getMarchaAtual() {
        return this.marchaAtual;
    }
    setMarchaAtual() {
        return this.marchaAtual;
    }
    getVelocidadeAtual() {
        return this.velocidadeAtual;
    }
    setVelocidadeAtual() {
        return this.velocidadeAtual;
    }
}
const veiculo1 = new Veiculo("RX-7", "MAZDA RX-7", "ABF1D33", 524, 6, 4, 230.00);
const veiculo2 = new Veiculo("Porsche", "Porsche Cayman", "XGH9G57", 670, 6, 5, 290.00);
const veiculo3 = new Veiculo("Nissan", "Nissan Skyline GT-R 2.6", "JKL3R98", 320, 6, 3, 250.00);
console.log(veiculo1);
console.log(veiculo2);
console.log(veiculo3);

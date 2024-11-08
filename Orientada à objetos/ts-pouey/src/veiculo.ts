"use strict";
class Veiculo {
    public marca: string;
    public modelo: string;
    private placa: string;
    public cavalos: number;
    public numeroMarchas: number;
    public marchaAtual: number;
    public velocidadeAtual: number;

    constructor(marca: string, modelo: string, placa: string, cavalos: number, numeroMarchas: number, marchaAtual: number, velocidadeAtual: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
        this.cavalos = cavalos;
        this.numeroMarchas = numeroMarchas;
        this.marchaAtual = marchaAtual;
        this.velocidadeAtual = velocidadeAtual;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(): string {
        return this.marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(): string {
        return this.modelo;
    }

    public getPlaca(): string {
        return this.placa;
    }

    public setPlaca(): string {
        return this.placa;
    }

    public getCavalos(): number {
        return this.cavalos;
    }

    public setCavalos(): number {
        return this.cavalos;
    }

    public getNumeroMarchas(): number {
        return this.numeroMarchas;
    }

    public setNumeroMarchas(): number {
        return this.numeroMarchas;
    }

    public getMarchaAtual(): number {
        return this.marchaAtual;
    }

    public setMarchaAtual(): number {
        return this.marchaAtual;
    }

    public getVelocidadeAtual(): number {
        return this.velocidadeAtual;
    }

    public setVelocidadeAtual(): number {
        return this.velocidadeAtual;
    }
}

const veiculo1 = new Veiculo("RX-7", "MAZDA RX-7", "ABF1D33", 524, 6, 4, 230.00);
const veiculo2 = new Veiculo("Porsche", "Porsche Cayman", "XGH9G57", 670, 6, 5, 290.00);
const veiculo3 = new Veiculo("Nissan", "Nissan Skyline GT-R 2.6", "JKL3R98", 320, 6, 3, 250.00);

console.log(veiculo1);
console.log(veiculo2);
console.log(veiculo3);
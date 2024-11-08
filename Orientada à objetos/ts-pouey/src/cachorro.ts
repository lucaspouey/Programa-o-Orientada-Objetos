"use strict";
class Cachorro {
    public raca: string;
    public nome: string;
    public porte: string;
    public pedigree: number;
    public peso: number;
    public nascimento: Date;
    public energia: string;

    constructor(raca: string, nome: string, porte: string, pedigree: number, peso: number, nascimento: Date, energia: string) {
        this.raca = raca;
        this.nome = nome;
        this.porte = porte;
        this.pedigree = pedigree;
        this.peso = peso;
        this.nascimento = nascimento;
        this.energia = energia;
    }

    public getRaca(): string {
        return this.raca;
    }

    public setRaca(): string {
        return this.raca;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(): string {
        return this.nome;
    }

    public getPorte(): string {
        return this.porte;
    }

    public setPorte(): string {
        return this.porte;
    }

    public getPedigree(): number {
        return this.pedigree;
    }

    public setPedigree(): number {
        return this.pedigree;
    }

    public getPeso(): number {
        return this.peso;
    }

    public setPeso(): number {
        return this.peso;
    }

    public getNascimento(): Date {
        return this.nascimento;
    }

    public setNascimento(): Date {
        return this.nascimento;
    }

    public getEnergia(): string {
        return this.energia;
    }

    public setEnergia(): string {
        return this.energia;
    }
}

const cachorro1 = new Cachorro("Ovelheiro", "Sapeca", "Porte Médio", 445167, 25, new Date(2018, 3, 10), "Alta");
const cachorro2 = new Cachorro("Beagle", "Minerva", "Porte Pequeno", 4654654, 30, new Date(2021, 2, 11), "Média");
const cachorro3 = new Cachorro("Linguincinha", "Lola", "Porte Pequeno", 9236246, 14, new Date(2020, 12, 4), "Média");

console.log(cachorro1);
console.log(cachorro2);
console.log(cachorro3);
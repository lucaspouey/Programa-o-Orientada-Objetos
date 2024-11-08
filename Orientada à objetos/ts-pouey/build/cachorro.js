"use strict";
class Cachorro {
    raca;
    nome;
    porte;
    pedigree;
    peso;
    nascimento;
    energia;
    constructor(raca, nome, porte, pedigree, peso, nascimento, energia) {
        this.raca = raca;
        this.nome = nome;
        this.porte = porte;
        this.pedigree = pedigree;
        this.peso = peso;
        this.nascimento = nascimento;
        this.energia = energia;
    }
    getRaca() {
        return this.raca;
    }
    setRaca() {
        return this.raca;
    }
    getNome() {
        return this.nome;
    }
    setNome() {
        return this.nome;
    }
    getPorte() {
        return this.porte;
    }
    setPorte() {
        return this.porte;
    }
    getPedigree() {
        return this.pedigree;
    }
    setPedigree() {
        return this.pedigree;
    }
    getPeso() {
        return this.peso;
    }
    setPeso() {
        return this.peso;
    }
    getNascimento() {
        return this.nascimento;
    }
    setNascimento() {
        return this.nascimento;
    }
    getEnergia() {
        return this.energia;
    }
    setEnergia() {
        return this.energia;
    }
}
const cachorro1 = new Cachorro("Ovelheiro", "Sapeca", "Porte Médio", 445167, 25, new Date(2018, 3, 10), "Alta");
const cachorro2 = new Cachorro("Beagle", "Minerva", "Porte Pequeno", 4654654, 30, new Date(2021, 2, 11), "Média");
const cachorro3 = new Cachorro("Linguincinha", "Lola", "Porte Pequeno", 9236246, 14, new Date(2020, 12, 4), "Média");
console.log(cachorro1);
console.log(cachorro2);
console.log(cachorro3);

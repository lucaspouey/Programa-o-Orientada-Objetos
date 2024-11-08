declare class Cachorro {
    raca: string;
    nome: string;
    porte: string;
    pedigree: number;
    peso: number;
    nascimento: Date;
    energia: string;
    constructor(raca: string, nome: string, porte: string, pedigree: number, peso: number, nascimento: Date, energia: string);
    getRaca(): string;
    setRaca(): string;
    getNome(): string;
    setNome(): string;
    getPorte(): string;
    setPorte(): string;
    getPedigree(): number;
    setPedigree(): number;
    getPeso(): number;
    setPeso(): number;
    getNascimento(): Date;
    setNascimento(): Date;
    getEnergia(): string;
    setEnergia(): string;
}
declare const cachorro1: Cachorro;
declare const cachorro2: Cachorro;
declare const cachorro3: Cachorro;

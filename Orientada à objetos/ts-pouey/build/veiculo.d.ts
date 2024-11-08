declare class Veiculo {
    marca: string;
    modelo: string;
    private placa;
    cavalos: number;
    numeroMarchas: number;
    marchaAtual: number;
    velocidadeAtual: number;
    constructor(marca: string, modelo: string, placa: string, cavalos: number, numeroMarchas: number, marchaAtual: number, velocidadeAtual: number);
    getMarca(): string;
    setMarca(): string;
    getModelo(): string;
    setModelo(): string;
    getPlaca(): string;
    setPlaca(): string;
    getCavalos(): number;
    setCavalos(): number;
    getNumeroMarchas(): number;
    setNumeroMarchas(): number;
    getMarchaAtual(): number;
    setMarchaAtual(): number;
    getVelocidadeAtual(): number;
    setVelocidadeAtual(): number;
}
declare const veiculo1: Veiculo;
declare const veiculo2: Veiculo;
declare const veiculo3: Veiculo;

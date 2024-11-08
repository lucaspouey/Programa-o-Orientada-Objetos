    class Carro {
    marca:string;
    modelo:string;
    ano:number; 
    quilometragem:number;


constructor (marca: string, modelo: string, ano: number, quilometragem: number) {
    this.marca = marca;
    this.modelo = modelo;   
    this.ano = ano;   
    this.quilometragem = quilometragem;

}
    public getMarca(): string {
        return this.marca; 
    }
    public getModelo(): string {
        return this.modelo;
    }
    public getAno(): number {
        return this.ano; 
    }
    public setQuilometragem(): number {
        return this.quilometragem;
    } 
    public andar(distancia: number): void {
        this.quilometragem += distancia;
        console.log(`O carro andou ${distancia} km.`);
    }
    public exibirInformacoes(): void {
        console.log(`modelo: ${this.modelo}, marca: ${this.marca}, ano ${this.ano}, quilometragem ${this.quilometragem}`);
    }
}
    
const carro = new Carro('Toyota', 'Corolla', 2020, 15000);
carro.exibirInformacoes(); // Output: Modelo: Corolla, Marca: Toyota, Ano: 2020, Quilometragem: 15000 km
carro.andar(100); // Output: O carro andou 100 km.
carro.exibirInformacoes(); // Output: Modelo: Corolla, Marca: Toyota, Ano: 2020, Quilometragem: 15100 km
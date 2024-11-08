class Funcionario { 
    nome: string;
    salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    getNome(): string {
        return this.nome;
    } 

    getSalario(): number {
        return this.salario;
    } 

    aumentarSalario(salario:number): void {
        this.salario += this.salario * (salario / 100);
    }
    exibirInformacoes(): void{
        console.log(`Nome: ${this.nome}, Salário: ${this.salario}`)}
}

const funcionario = new Funcionario("João", 2000);
console.log(funcionario.getNome());
console.log(funcionario.getSalario());
funcionario.exibirInformacoes(); // Output: Nome: João, Salário: R$2000
funcionario.aumentarSalario(10); // Aumenta o salário em 10%
funcionario.exibirInformacoes(); // Output: Nome: João, Salário: R$2200

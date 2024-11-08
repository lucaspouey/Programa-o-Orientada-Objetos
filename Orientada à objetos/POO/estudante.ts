class Estudante { 
    public nome: string;
    public idade: number;
    private matricula: string;
    private notas: number[]; 

    constructor(nome: string, idade: number, matricula: string, notas: number[] = []) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
        this.notas = notas;
    }
    
    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Matrícula: ${this.matricula}`);
    }

    adicionarNota(nota: number): void {
        this.notas.push(nota); 
    }

    calcularMedia(): number {
        if (this.notas.length === 0) return 0; 
        let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    }
}

const estudante = new Estudante('Lucas', 20, '2023001'); 
estudante.adicionarNota(8);
estudante.adicionarNota(9); 
estudante.adicionarNota(7);
estudante.exibirInformacoes(); // Output: Nome: Lucas, Idade: 20, Matrícula: 2023001
console.log(`Média: ${estudante.calcularMedia()}`); // Output: Média: 8.0
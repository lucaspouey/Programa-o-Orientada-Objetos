class Cliente {
    public nome: string;
    private email: string; 
    private telefone: string;

    constructor(nome: string, email: string, telefone: string) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    getNome(): string {
        return this.nome;
    }
    
    getEmail(): string {
        return this.email;
    }

    getTelefone(): string {
        return this.telefone; 
    }

    atualizarEmail(novoEmail: string): void {
        this.email = novoEmail; 
    }

    atualizarTelefone(novoTelefone: string): void {
        this.telefone = novoTelefone; 
    }
    
    exibirInformacoes(): void {
        console.log(`Os dados foram atualizados para:`)
        console.log(`Nome: ${this.nome}, Email: ${this.getEmail()}, Telefone: ${this.getTelefone()}`);
    }
}

const cliente = new Cliente('Maria', 'maria@email.com', '123456789');
cliente.exibirInformacoes(); // Output: Nome: Maria, Email: maria@email.com, Telefone: 123456789
cliente.atualizarEmail('maria@novoemail.com');
cliente.atualizarTelefone('987654321');
cliente.exibirInformacoes(); // Output: Nome: Maria, Email: maria@novoemail.com, Telefone: 987654321
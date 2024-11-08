declare class Cliente {
    private cpf;
    nome: string;
    private nascimento;
    private telefone;
    email: string;
    private saldo;
    constructor(cpf: string, nome: string, nascimento: Date, telefone: string, email: string, saldo: number);
    getCpf(): string;
    setCpf(cpf: string): void;
    getNome(): string;
    setNome(nome: string): void;
    getNascimento(): Date;
    setNascimento(nascimento: Date): void;
    getTelefone(): string;
    setTelefone(telefone: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getSaldo(): number;
    setSaldo(saldo: number): void;
    private saldoTotal;
}
declare const cliente: Cliente;

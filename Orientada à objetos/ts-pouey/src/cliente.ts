"use strict";
class Cliente {
    private cpf: string;
    public nome: string;
    private nascimento: Date;
    private telefone: string;
    public email: string;
    private saldo: number;

    constructor(cpf: string, nome: string, nascimento: Date, telefone: string, email: string, saldo: number) {
        this.cpf = cpf;
        this.nome = nome;
        this.nascimento = nascimento;
        this.telefone = telefone;
        this.email = email;
        this.saldo = saldo;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getNascimento(): Date {
        return this.nascimento;
    }

    public setNascimento(nascimento: Date): void {
        this.nascimento = nascimento;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    private saldoTotal(valor: number): boolean {
        if (this.saldo >= valor) {
            console.log(`${this.nome} possui R$${valor.toFixed(2)} de saldo para a compra.`);
            return true;
        } else {
            console.log(`${this.nome} não possui saldo suficiente. Valor disponível: R$${this.saldo.toFixed(2)}.`);
            return false;
        }
    }
}

const cliente = new Cliente("876.548.654.87", "Lucas Pouey", new Date(1995, 8, 2), "(53) 84567-654", "lucaspouey@gmail.com", 3500.00);

console.log(`O saldo do/a cliente ${cliente.getNome()} é de: ${cliente.getSaldo()}`);
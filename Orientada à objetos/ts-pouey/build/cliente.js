"use strict";
class Cliente {
    cpf;
    nome;
    nascimento;
    telefone;
    email;
    saldo;
    constructor(cpf, nome, nascimento, telefone, email, saldo) {
        this.cpf = cpf;
        this.nome = nome;
        this.nascimento = nascimento;
        this.telefone = telefone;
        this.email = email;
        this.saldo = saldo;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getNascimento() {
        return this.nascimento;
    }
    setNascimento(nascimento) {
        this.nascimento = nascimento;
    }
    getTelefone() {
        return this.telefone;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getSaldo() {
        return this.saldo;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    saldoTotal(valor) {
        if (this.saldo >= valor) {
            console.log(`${this.nome} possui R$${valor.toFixed(2)} de saldo para a compra.`);
            return true;
        }
        else {
            console.log(`${this.nome} não possui saldo suficiente. Valor disponível: R$${this.saldo.toFixed(2)}.`);
            return false;
        }
    }
}
const cliente = new Cliente("876.548.654.87", "Lucas Pouey", new Date(1995, 8, 2), "(53) 84567-654", "lucaspouey@gmail.com", 3500.00);
console.log(`O saldo do/a cliente ${cliente.getNome()} é de: ${cliente.getSaldo()}`);

"use strict";
class Produto {
    private codigo: number;
    public nome: string;
    public valorCompra: number;
    public valorVenda: number;
    public estoque: number;
    public estoqueMin: number;

    constructor(codigo: number, nome: string, valorCompra: number, valorVenda: number, estoque: number, estoqueMin: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.estoque = estoque;
        this.estoqueMin = estoqueMin;
    }

    public getCodigo(): number {
        return this.codigo;
    }

    

}
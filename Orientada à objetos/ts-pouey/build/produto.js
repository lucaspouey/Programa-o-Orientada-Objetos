"use strict";
class Produto {
    codigo;
    nome;
    valorCompra;
    valorVenda;
    estoque;
    estoqueMin;
    constructor(codigo, nome, valorCompra, valorVenda, estoque, estoqueMin) {
        this.codigo = codigo;
        this.nome = nome;
        this.valorCompra = valorCompra;
        this.valorVenda = valorVenda;
        this.estoque = estoque;
        this.estoqueMin = estoqueMin;
    }
    getCodigo() {
        return this.codigo;
    }
}

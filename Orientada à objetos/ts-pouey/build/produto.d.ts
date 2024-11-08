declare class Produto {
    private codigo;
    nome: string;
    valorCompra: number;
    valorVenda: number;
    estoque: number;
    estoqueMin: number;
    constructor(codigo: number, nome: string, valorCompra: number, valorVenda: number, estoque: number, estoqueMin: number);
    getCodigo(): number;
}

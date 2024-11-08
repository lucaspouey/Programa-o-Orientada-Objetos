class Produto { 
    public nome: string;
    private preco: number;
    private quantidade: number;

    constructor (nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco=  preco;
        this.quantidade=  quantidade; 
    }

    adicionarEstoque(quantidade: number): void {
        this.quantidade += quantidade;
        console.log (`Quantidade de ${this.nome} adicionada ao estoque: ${quantidade}`)
    }
    
    removerEstoque(quantidade:number): void {
        if (this.quantidade >= quantidade) {
            this.quantidade -= quantidade;  
            console.log (`Removido ${quantidade} unidades do estoque.`)
    } else{
        console.log (`Não há estoque suficiente para remover ${quantidade} unidades.`)
    }
    }
    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`);
    }
    }

const produto = new Produto('Camiseta', 50, 10);
produto.exibirInformacoes(); // Output: Nome: Camiseta, Preço: R$50,
Quantidade: 10
produto.adicionarEstoque(5);
produto.removerEstoque(3);
produto.exibirInformacoes(); // Output: Nome: Camiseta, Preço: R$50,
Quantidade: 12
produto.removerEstoque(15); // Output: Estoque insuficiente.0

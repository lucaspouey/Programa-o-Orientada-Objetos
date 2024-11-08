class Livro { 
public  titulo: string;
public  autor: string;
public  anoPublicacao: number;
private disponivel: boolean;

constructor(titulo: string, autor:string, anoPublicacao: number, disponivel: boolean) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao; 
    this.disponivel = disponivel;
    }
     exibirInformacoes() {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Ano de publicação: ${this.anoPublicacao}`);
     }

    emprestar() : void {
        if (this.disponivel) {
            console.log (`Livro ${this.titulo} emprestado com sucesso.`); 
        this.disponivel= false;}
        else {console.log (`Livro ${this.titulo} não está disponível para empréstimo.`); }
        }

    devolver(): void {
            this.disponivel = true;
            console.log(`Livro ${this.titulo} foi devolvido.`); 
        }

}

const livro = new Livro('Dom Casmurro', 'Machado de Assis', 1899, true);
livro.exibirInformacoes(); // Output: Título: Dom Casmurro, Autor: Machadode Assis, Ano: 1899, Disponível: true
livro.emprestar(); // Output: Livro emprestado com sucesso.
livro.emprestar(); // Output: Livro não disponível.
livro.devolver();
livro.exibirInformacoes(); // Output: Título: Dom Casmurro, Autor: Machadode Assis, Ano: 189
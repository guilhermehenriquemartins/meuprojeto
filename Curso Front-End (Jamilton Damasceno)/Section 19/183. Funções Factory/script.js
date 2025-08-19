//Factory -> Design Pattern (padrão de design ou padrão de projetos)
//Padrão de projetos -> forma comum de resolver problemas

const ProdutoFactory = function(nome, preco) {
  return {
    nome,
    preco,
    recuperarAvaliacoes() {
      console.log(`Avaliações para ${this.nome}`)
    }
  }
}

const produto = ProdutoFactory("Notebook", 2800)
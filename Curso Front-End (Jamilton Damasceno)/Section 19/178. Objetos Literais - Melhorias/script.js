//Algumas melhorias quando trabalha-se com objetos literais
//Como criar atributos e métodos de forma dinâmica
//Ao instanciar um objeto e atribuir à uma variável ou constante, ele aponta para um único objeto


let nome = "Notebook"
let preco = 1800

const produto = {
  nome: nome,
  preco: preco,
  get exibirProduto() {
    console.log(`${this.nome} - ${this.preco} | ${this.categoria}`)
  }
}

const pro = produto
pro.preco = 2000
console.log(produto.preco)

/*produto.categoria = "Eletrônicos"

produto.exibirPreco = function() {
  console.log(`Preço: ${this.preco}`)
}

produto.exibirPreco()
*/
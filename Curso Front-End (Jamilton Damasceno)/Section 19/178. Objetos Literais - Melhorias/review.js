let nome = 'Caneca Branca'
let preco = 75.80

const produto = {
  nome,
  preco,
  mostrarProduto() {
    console.log(`${this.nome} - R$${this.preco} | ${this.categoria}`)
  }
}

produto.categoria = 'Cozinha'
produto.mostrarPreco = function() {
  console.log(`R$${this.preco}`)
}

const pro = produto

pro.preco = 60.00

console.log(produto.preco)
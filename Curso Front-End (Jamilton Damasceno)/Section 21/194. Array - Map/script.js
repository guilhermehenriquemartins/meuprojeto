//Map percorre cada um dos itens, mas retornamos cada um dos itens aplicando uma transformação

/*const pessoas = ["Guilherme", "Ana", "João"]

function funcao(item, indice, arr) {
  return {nome: item, senha: indice}
}

const novo = pessoas.map(funcao)
console.log(novo)*/

const produtosDolar = [
  {produto: "Notebook", preco: 1200, moeda: "$"},
  {produto: "Celular", preco: 800, moeda: "$"}
]

const produtosReal = produtosDolar.map(item => {
  let preco = item.preco *= 5
  return {produto: item.produto, preco: preco, moeda: "R$"}
})

console.log(produtosReal)


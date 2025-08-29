const produtosDolar = [
  {nome: "Notebook", valor: 2099.00, moeda: "$"},
  {nome: "Livro", valor: 19.00, moeda: "$"}
]

const produtosReal = produtosDolar.map(item => {
  let valor = item.valor * 5.43
  return {nome: item.nome, valor: valor.toFixed(2), moeda: "R$"}
})

console.log(produtosReal)

/////////////////////////////////////////////////////////////////////////////////

const salmos = ["23", "91"]

const versiculos = salmos.map(item => {
  if (item === "23") {
    return {salmos: 23, versos: "O senhor é o meu pastor, e nada me faltará."}
  } else {
    return {salmos: 91, versos: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará."}
  }
})

console.log(versiculos)

/////////////////////////////////////////////////////////////////////////////////

const pessoas = ["Guilherme", "Ana", "João", "Fernando", "Beatriz", "Alicia", "Jorge"]

const listaChamada = pessoas.map(function(item, indice) {
  let numero = 490 + indice+1
  return {nome: item, chamada: numero}
})

console.log(listaChamada)
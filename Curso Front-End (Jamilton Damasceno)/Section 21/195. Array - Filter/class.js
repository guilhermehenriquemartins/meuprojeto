//Com esse método conseguimos pegar uma lista de itens de array e filtrar dentro dela quais itens desejamos utilizar

const usuarios = [
  {nome: "Jamilton", idade: 32},
  {nome: "Ana", idade: 16},
  {nome: "Maria", idade: 40}
]

function funcao(item, i, arr) {
  console.log(this)
  return item.idade >= 18
}

const filtro = {
  filtro: 18
}

const usuarioMaiorIdade = usuarios.filter( funcao, filtro )
//A diferença deste método é que ele recebe uma função como primeiro parâmetro

console.log(usuarioMaiorIdade)

//O thisValue é o segundo parâmetro que passamos para o filter, e é utilizado para aplicarmos os filtros
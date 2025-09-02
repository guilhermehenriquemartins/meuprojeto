//O método Reduce tem como objetivo de reduzir uma array para um único valor

/*const numeros = [ 2, 3, 5]

const funcao = function(acumulador, atual, i) {
  console.log(acumulador)
  console.log(atual)
}

const resultado = numeros.reduce(funcao)
*/


const produtos = [
  {nome: "Notebook", promocao: true},
  {nome: "Celular", promocao: true}
]

const produtoPromocao = produtos.reduce(function(acumulador, item) {
  if(item.promocao) {
    acumulador++
  }

  return acumulador
}, 0)

console.log(produtoPromocao)
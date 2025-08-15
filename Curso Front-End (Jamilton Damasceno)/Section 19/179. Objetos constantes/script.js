//Como eu consigo atribuir um objeto à uma constante e depois fazer alterações nessa constante

const Produto = {
  nome: "Notebook"
}

const pro = Produto
pro.nome = "Computador"

console.log(Produto.nome)

//Uma vez que você criou a constante 'produto', a constate aponta para o espaço da memória que tem o objeto, e você consegue alterar o objeto, o que você não consegue é atribuir um novo espaço de memória para esse objeto
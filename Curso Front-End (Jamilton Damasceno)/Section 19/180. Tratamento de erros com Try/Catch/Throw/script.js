//Quando você está criando sua aplicação, em alguns momentos podem acontecer alguns erros. E podemos fazer tratamento de erros para essas aplicações:

//Tratamento de erros com Try Catch
function contarQtdLetras( produto ) {
    try {
      console.log(produto.nome.length)
    } catch(erro) {
      tratarErro( erro )
      //console.log("Erro ao processar")
    }
}

function tratarErro( erro ) {
  throw new Error("Código do erro: 164")
}

const produto = {
  nom: "Notebook",
  preco: 1200
}

contarQtdLetras(produto)
//Funções de Callback

function processar(callbackSucesso, callbackErro) {
  let Resultado = true
  if (Resultado) {
    callbackSucesso()
  } else {
    callbackErro()
  }
}

function mostrarResultado() {
  console.log('Mostrou Resultado')
}

const erro = function() {
  console.log('erro')
}

processar(mostrarResultado, erro)

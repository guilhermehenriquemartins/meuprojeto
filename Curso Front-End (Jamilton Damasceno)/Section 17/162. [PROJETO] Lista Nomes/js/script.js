let texto = window.document.getElementById('nome-usuario')

const nomes = [
  'guilherme',
  'josé',
  'letícia',
  'maria',
  'carlos',
  'pedro',
  'marcela',
  'carla',
  'carlos'
]

function carregou() {
  let itensLista = ''

  for (indice in nomes) {
    let nome = nomes[indice]
    itensLista += `<li class="item">${nome}</li>`
  }

  document.getElementsByTagName('ul')[0].innerHTML = itensLista
}

function pesquisou() {
  itensLista = ''
  for (indice in nomes) {
    if (texto.value.toLowerCase() == nomes[indice]) {
      let nome = nomes[indice]
      itensLista += `<li class="item">${nome}</li>`
    }
  }

  document.getElementsByTagName('ul')[0].innerHTML = itensLista
}
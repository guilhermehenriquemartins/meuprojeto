let nomes = ["guilherme", "josé", "letícia", "maria", "carlos", "pedro", "marcela", "carla", "carlos"]

function carregou() {
  let nomesLista = ''
  for(id in nomes) {
    nomesLista += `<li>${nomes[id]}</li>`
  }
  let lista = document.getElementsByTagName('ul')[0].innerHTML = nomesLista
}

function pesquisou() {
  let nomesLista = ''
  let texto = window.document.getElementById('inome').value
  for(id in nomes) {
    if (nomes[id] == texto) {
      nomesLista += `<li>${nomes[id]}</li>`
    }
  }
  let lista = document.getElementsByTagName('ul')[0].innerHTML = nomesLista
}
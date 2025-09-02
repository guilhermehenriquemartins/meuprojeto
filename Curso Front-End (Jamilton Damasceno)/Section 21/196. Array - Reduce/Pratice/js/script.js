const veiculos = [
  {nome: "Corsa", montadora: "chevrolet"},
  {nome: "Focus", montadora: "ford"},
  {nome: "Gol", montadora: "volkswagen"},
  {nome: "Civic", montadora: "honda"},
  {nome: "Elantra", montadora: "hyundai"},
  {nome: "Uno", montadora: "fiat"},
  {nome: "Sandero", montadora: "renault"},
  {nome: "Cobalt", montadora: "chevrolet"},
  {nome: "F250", montadora: "ford"},
  {nome: "Fox", montadora: "volkswagen"},
  {nome: "CRV", montadora: "honda"},
  {nome: "ix35", montadora: "hyundai"},
  {nome: "Ducato", montadora: "fiat"},
  {nome: "kwid", montadora: "renault"},
  {nome: "Chevette", montadora: "chevrolet"},
  {nome: "F1000", montadora: "ford"},
  {nome: "Saveiro", montadora: "volkswagen"},
  {nome: "Fit", montadora: "honda"},
  {nome: "Hb20", montadora: "hyundai"},
  {nome: "Mobi", montadora: "fiat"},
  {nome: "Clio", montadora: "renault"},
]

function carregou() {

  const veiculosLista = veiculos.reduce(function(acumulador, item){
    acumulador += `<li><strong>Veículo</strong>: ${item.nome} <br> Montadora: ${(item.montadora).charAt(0).toUpperCase() + (item.montadora).slice(1)}</li>`
    return acumulador
  }, '')

  window.document.getElementsByTagName('ul')[0].innerHTML = veiculosLista
}

function pesquisou() {
  let listaVeiculos = ''

  const funcao = function(item) {
    if (item.nome == valor.filtro || item.montadora == valor.filtro) {
      return true 
    }
  }
  const valor = {
    filtro: window.document.getElementById('nome-carro').value
  }

  const veiculosLista = veiculos.filter(funcao, valor)
  const listaNova = veiculosLista.map(item => { return `<strong>Veículo:</strong> ${item.nome} <br> Montadora: ${(item.montadora).charAt(0).toUpperCase() + (item.montadora).slice(1)}` })
  
  const listaTexto = listaNova.reduce(function(acumulador, item) {
    acumulador += `<li>${item}</li>`
    return acumulador
  }, '')

  window.document.getElementsByTagName('ul')[0].innerHTML = listaTexto
}
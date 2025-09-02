const carros = [
  {nome: "Gol", marca: "volkswagen"},
  {nome: "ix35", marca: "hyundai"},
  {nome: "Passat Variant", marca: "volkswagen"},
  {nome: "Focus", marca: "ford"},
  {nome: "Cobalt", marca: "chevrolet"},
  {nome: "Hb-20", marca: "hyundai"},
  {nome: "Jetta", marca: "volkswagen"},
  {nome: "Corsa", marca: "chevrolet"},
  {nome: "F250", marca: "ford"},
  {nome: "Vectra", marca: "chevrolet"}
]

function carregou() {
  let carrosLista = ''
  const nomesVeiculos = carros.map(item => { return `<strong>Veículo:</strong> ${item.nome} <br> Montadora: ${(item.marca).charAt(0).toUpperCase() + (item.marca).slice(1)}` })

  for(indice in nomesVeiculos) {
    carrosLista += `<li> ${nomesVeiculos[indice]} </li>`
  }

  document.getElementsByTagName("ul")[0].innerHTML = carrosLista
}

function pesquisou() {
  let texto = window.document.getElementById("nome-carro").value
  let carrosLista = ''
  function funcao(item) {
    return item.marca == pesquisa.filtro || item.nome == pesquisa.filtro
  }

  const pesquisa = {
    filtro: texto
  }

  const lista = carros.filter(funcao, pesquisa)
  const textoVeiculos = lista.map(item => {return `<strong>Veículo:</strong> ${item.nome} <br> Montadora: ${(item.marca).charAt(0).toUpperCase() + (item.marca).slice(1)}`})
  for (indice in textoVeiculos) {
    carrosLista += `<li>${textoVeiculos[indice]}</li>`
  }

  document.getElementsByTagName("ul")[0].innerHTML = carrosLista
}
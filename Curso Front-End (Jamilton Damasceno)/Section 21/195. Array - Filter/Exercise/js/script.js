let texto = window.document.getElementById("nome-carro")

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

  for(indice in carros) {
    carrosLista += `<li>${carros.nome}</li>`
    console.log(carros.nome)
  }

  document.getElementsByTagName("ul")[0].innerHTML = carrosLista
}
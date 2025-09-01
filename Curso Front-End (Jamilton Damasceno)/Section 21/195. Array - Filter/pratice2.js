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

//Filtro de Volkswagen
const carrosVolks = carros.filter( item => {return item.marca == "volkswagen"} )

//Filtro de Hyundai
const carrosHyundai = carros.filter( item => { return item.marca == "hyundai" } )

//Filtro de Chevrolet
const carrosGM = carros.filter( item => { return item.marca == "chevrolet" } )

//Filtro de Ford
const carrosFord = carros.filter( item => { return item.marca == "ford" } )
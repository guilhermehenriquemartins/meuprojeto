const carros = [
  {nome: "Gol", marca: "volkswagen"},
  {nome: "ix35", marca: "hyundai"},
  {nome: "Santa Fé", marca: "hyundai"},
  {nome: "Polo", marca: "volkswagen"}
]

const funcao = function(item) {
  return item.marca == hyundai.filtro
}

const funcao2 = function(item) {
  return item.marca == volkswagen.filtro
}

const hyundai = {
  filtro: "hyundai"
}

const volkswagen = {
  filtro: "volkswagen"
}

const carrosHyundai = carros.filter(funcao, hyundai)
const carrosVolks = carros.filter(funcao2, volkswagen)

console.log(carrosVolks)
let pedaco = 1

/*while (pedaco <= 8) {
  if(pedaco == 1) {
    console.log(`Comeu ${pedaco} pedaço de pizza.`)
  } else {
    console.log(`Comeu ${pedaco} pedaços de pizza.`)
  }
  pedaco++
}

do {
  if(pedaco == 1) {
    console.log(`Comeu ${pedaco} pedaço de pizza.`)
  } else {
    console.log(`Comeu ${pedaco} pedaços de pizza.`)
  }
  pedaco++
} while (pedaco <= 8)*/

let postagens = [ 
  "Hoje passando pela av paulista",
  "Passeando em Campos do Jordão",
  "Hoje fiz um curso de criação de sites",
  "Na casa da mamãe, aproveitando o dia!"
]

let contador = 0

while (contador < postagens.length) {
  console.log(`TEXTO ${contador+1}:`)
  console.log(postagens[contador])
  console.log("----------")
  contador++
}
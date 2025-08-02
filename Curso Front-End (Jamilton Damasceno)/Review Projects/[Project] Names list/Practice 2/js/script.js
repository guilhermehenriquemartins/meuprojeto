class Lista {
  constructor() {
    this.lista = window.document.getElementsByTagName('ul')[0]
    this.texto = window.document.getElementById('inome')
    this.secao = window.document.getElementsByTagName('section')[0]
    this.nomes = ["guilherme", "josé", "letícia", "maria", "carlos", "pedro", "marcela", "carla", "carlos"]
  }

  get carregar() {
    let nomesLista = ""

    for(let nome in this.nomes) {
      nomesLista += `<li>${this.nomes[nome]}</li>`
    }

    return this.lista.innerHTML = nomesLista
  }


  get pesquisar() {
    let nomesLista = ""

    for(let nome in this.nomes) {
      if(this.texto.value == this.nomes[nome]) {
        nomesLista += `<li>${this.nomes[nome]}</li>`
      }
    }
    
    return this.lista.innerHTML = nomesLista
  }
}

function carregou() {
  let lista = new Lista()
  lista.carregar
}

function pesquisou() {
  let lista = new Lista()
  lista.pesquisar
}
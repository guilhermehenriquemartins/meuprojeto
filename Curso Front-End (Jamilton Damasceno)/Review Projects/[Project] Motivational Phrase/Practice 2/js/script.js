class FraseMotivacional {
  constructor() {
    this.frases = [
      "Acredite que você pode e você já está na metade do caminho.",
      "Não importa o quão devagar você vá, desde que você não pare.",
      "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
      "A vida é feita de desafios, e superá-los nos torna mais fortes.",
      "Não tenha medo de falhar, tenha medo de não tentar.",
      "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
      "A persistência realiza o impossível.",
      "Seja a mudança que você quer ver no mundo.",
      "Acredite em seus sonhos e lute por eles.",
      "A vida é uma aventura, aproveite cada momento."
    ],
    this.paragrafo = window.document.getElementsByTagName('p')[0]
  }

  gerarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * (this.frases.length - 1))
    return numeroAleatorio
  }

  tratarParagrafo() {
    this.paragrafo.style.borderTop = '1px solid #0000004d'
    this.paragrafo.style.borderBottom = '1px solid #0000004d'
    this.paragrafo.style.padding = '10px 0'
  }
  
  get mostrarFrase() {
    this.tratarParagrafo()
    return this.paragrafo.innerText = this.frases[this.gerarNumeroAleatorio()]
  }
}

function gerar() {
  let frase = new FraseMotivacional()
  frase.mostrarFrase
}
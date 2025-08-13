class Animal {
  constructor(pCor, pTamanho, pPeso) {
    this.cor = pCor
    this.tamanho = pTamanho
    this.peso = pPeso
  }
  
  correr() {
    console.log('Correr como um')
  }
  
  get dormir() {
    console.log('dormiu')
  }
}

class Cao extends Animal {
  constructor(pCor, pTamanho, pPeso, pOrelha) {
    super(pCor, pTamanho, pPeso)
    this.tamanhoOrelha = pOrelha
  }

  correr() {
    super.correr()
    console.log('Cão')
  }

  get latir() {
    console.log('latiu!')
  }
}

class Passaro extends Animal {
  correr() {
    super.correr()
    console.log('Pássado')
  }

  voar() {
    console.log('Voou!')
  }
}

class Papagaio extends Passaro {
  constructor(pCor, pTamanho, pPeso) {
    super(pCor, pTamanho, pPeso)
    this.sabeFalar = true
  }
  falar() {
    console.log('Falar')
  }
}

const papagaio = new Papagaio('Verde', 37, 3)
console.log(papagaio.sabeFalar)
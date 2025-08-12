class Animal {
  constructor() {
    this.cor;
    this.tamanho;
    this.peso;
  }
  
  correr() {
    console.log('Correr como um')
  }
  
  get dormir() {
    console.log('dormiu')
  }
}

class Cao extends Animal {
  constructor() {
    super()
    this.tamanhoOrelha = 0
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
  get voar() {
    console.log('Voou!')
  }
}

class Papagaio extends Passaro {
  get falar() {
    console.log('Falou! Só que não.')
  }
}

const dalmata = new Cao()
dalmata.correr()
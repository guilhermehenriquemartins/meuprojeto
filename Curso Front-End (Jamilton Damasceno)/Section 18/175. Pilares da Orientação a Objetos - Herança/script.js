class Animal {
  constructor() {
    this.cor;
    this.tamanho;
    this.peso;
  }

  get correr() {
    console.log('correu')
  }

  get dormir() {
    console.log('dormiu')
  }
}

class Cao extends Animal {
  get latir() {
    console.log('latiu!')
  }
}

class Passaro extends Animal {
  get voa() {
    console.log('voou!')
  }
}

const papagaio = new Passaro()
papagaio.voa
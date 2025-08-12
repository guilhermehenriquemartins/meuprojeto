/* ABSTRAÇÃO - HERANÇA E POLIMORFISMO

//superclasse (classe-pai / principal)
class Animal { // 1.Modelo
  constructor() { // 2.Características
    this.cor;
    this.tamanho;
    this.peso;
  }

  correr() { // 3.Ações
    console.log('Correr como um:')
  }

  dormir() { // 3.Ações
    console.log('Dormir como um ')
  }
}

//subclasse (classe-filha)
class Cao extends Animal { // 1.Modelo
  latir() { // 3.Ações
    console.log('Latir como um cão')
  }

  correr() { // 3.Ações
    super.correr()
    console.log('Cão') // 5. Identidade
  }
}

class Dalmata extends Cao { // 1.Modelo
  constructor() { // 2.Características
    super()
    this.cor = 'Preto e branco'
  }

  get Cor() { // 3.Ações
    console.log(this.cor) // 5.Identidade
  }
}

const dalmata = new Dalmata() // 4. Entidade
dalmata.Cor

*/



/* ENCAPSULAMENTO

class Conta {
  constructor() {
    this._nome = 'Guilherme Henrique Fiorio Martins'
    this.senha = '$hdjP53946!'
  }

    get nome() {
      return this._nome
    }

  set nome(valor) {
    if (this.nome !== valor) {
      console.log('Nome incorreto. Tente novamente!')
    } else {
      console.log('Logando...')
    }
  }
}

const login = new Conta()
login.nome = 'Guilherme Henrique Fiorio Martins'

*/
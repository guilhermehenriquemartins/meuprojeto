class ContaBancaria {
  constructor() {
    this._numeroConta = 0
    this._saldo = 0
  }

  sacar( valorSaque ) {
    this._saldo -= valorSaque
  }
  depositar( valorDeposito ) {
    this._saldo += valorDeposito
  }

  get saldo () {
    return this._saldo
  }
  set saldo ( valor ) {
    if (valor > 0) {
      this._saldo = valor
    } else {
      console.log('Valor inválido, tente novamente.')
    }
  }
  get numeroConta() {
    return this._numeroConta
  }
  set numeroConta( numero ) {
    if (numero > 0) {
      this._numeroConta = numero
    } else {
      console.log('Valor inválido, tente novamente.')
    }
  }
}

const conta = new ContaBancaria()
conta.saldo = 10

console.log(conta.saldo)
// Funções construtoras - Encapsulamento

const Hotel = function() {

  this.nome = "Hotel do Jamilton"
  this.quantidadeSuites = 30
  this.suitesOcupadas = 25


  this.reservar = function() {
    if(this.suitesOcupadas < 30) {
      this.suitesOcupadas++
    } else {
      console.log("Estamos lotados")
    }
    console.log(`ocupadas: ${this.suitesOcupadas}`)
  }

}

const hotel = new Hotel()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()
hotel.reservar()


console.log(hotel.suitesOcupadas)


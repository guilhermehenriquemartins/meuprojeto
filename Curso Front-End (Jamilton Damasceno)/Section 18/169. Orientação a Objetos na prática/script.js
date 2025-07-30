const hotel = {
  quartos: 20,
  ocupados: 10,
  verificarDisponibilidade: function() {
    let disponibilidade = this.quartos - this.ocupados
    console.log(`Disponíveis: ${disponibilidade} quartos`)
  }
}

hotel.ocupados = 18
hotel.verificarDisponibilidade()
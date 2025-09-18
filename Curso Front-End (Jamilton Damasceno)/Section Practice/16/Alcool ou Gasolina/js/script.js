function carregou() {
  const alcool = document.getElementById('valorAlcool')
  const gasolina = document.getElementById('valorGasolina')
  const botao = document.querySelector('[botao-calcular]')

  function calcular() {
    if ((alcool.value / gasolina.value) >= 0.7) {
      document.querySelector('#res').textContent = "Melhor utilizar Gasolina"
    } else {
      document.querySelector('#res').textContent = "Melhor utilizar Álcool"
    }
  }

  botao.addEventListener('click', calcular)
}
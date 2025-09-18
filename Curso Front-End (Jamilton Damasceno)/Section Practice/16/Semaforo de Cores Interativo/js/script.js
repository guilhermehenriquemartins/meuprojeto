let intervaloAmarelo;

function padrao() {
  const farol2 = document.querySelector('.desligado2')
  let classes2 = farol2.classList

  function executar() {
    classes2.toggle('amarelo')
  }

  intervaloAmarelo = setInterval(executar, 1000)
}
window.addEventListener('load', padrao)

let estado = 'desligado'
function mudarCor() {
  clearInterval(intervaloAmarelo)
  document.querySelector('.desligado2').classList.remove('amarelo')
  switch(estado) {
    case 'desligado':
      estado = 'vermelho'
      document.querySelector('.desligado1').classList.add(estado)
      break
    case 'vermelho':
      estado = 'amarelo'
      document.querySelector('.desligado1').classList.remove('vermelho')
      document.querySelector('.desligado2').classList.add(estado)
      break
    case 'amarelo':
      estado = 'verde'
      document.querySelector('.desligado2').classList.remove('amarelo')
      document.querySelector('.desligado3').classList.add(estado)
      break
    case 'verde':
      estado = 'vermelho'
      document.querySelector('.desligado3').classList.remove('verde')
      document.querySelector('.desligado1').classList.add(estado)
  }
}

function executar() {
  mudarCor()
}
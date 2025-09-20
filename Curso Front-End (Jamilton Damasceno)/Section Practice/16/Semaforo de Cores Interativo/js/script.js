window.addEventListener('load', function() {
  let luz = 'desligado'
  const botao = document.querySelector('button')
  function executar() {
    document.getElementsByTagName('div')[1].classList.toggle('luzAmarela')
  }
  let padrao = setInterval(executar, 1000)

  function mudarCor() {
    document.getElementsByTagName('div')[1].classList.remove('luzAmarela')
    clearInterval(padrao)
    switch(luz) {
      case 'desligado':
        luz = 'luzVermelha'
        document.getElementsByTagName('div')[0].classList.add(luz)
        break
      case 'luzVermelha':
        luz = 'luzAmarela'
        document.getElementsByTagName('div')[0].classList.remove('luzVermelha')
        document.getElementsByTagName('div')[1].classList.add(luz)
        break
      case 'luzAmarela':
        luz = 'luzVerde'
        document.getElementsByTagName('div')[1].classList.remove('luzAmarela')
        document.getElementsByTagName('div')[2].classList.add(luz)
        break
      case 'luzVerde':
        luz = 'luzVermelha'
        document.getElementsByTagName('div')[2].classList.remove('luzVerde')
        document.getElementsByTagName('div')[0].classList.add(luz)
    }
  }
  botao.addEventListener('click', mudarCor)
})
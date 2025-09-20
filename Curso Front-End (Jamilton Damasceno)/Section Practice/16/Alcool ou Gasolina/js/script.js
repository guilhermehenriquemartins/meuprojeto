function carregou() {
  //Variáveis
  let botao = document.querySelector('input[type="submit"]')
  let alcool = document.querySelector('#alcool')
  let gasolina = document.querySelector('#gasolina')

  //Ouvintes de Eventos
  botao.addEventListener('mousemove', function() {
    botao.style.color = 'white'
    botao.style.backgroundColor = 'black'
  })
  botao.addEventListener('mouseout', function() {
    botao.style.color = 'white'
    botao.style.backgroundColor = '#002d4b'
  })
  botao.addEventListener('click', function() {
    botao.style.backgroundColor = 'white'
    botao.style.color = '#002d4b'
    alcool.value / gasolina.value >= 0.7 ? document.querySelector('#resultado').textContent = 'Melhor utilizar Gasolina' : document.querySelector('#resultado').textContent = 'Melhor utilizar Álcool'
  })
}
let form = document.getElementsByTagName('form')[0]
let alcool = document.getElementById('ialcool')
let gasolina = document.getElementById('igasolina')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  if (alcool.value.length == 0 && gasolina.value.length == 0) {
    alert('O campo "Álcool" e "Gasolina" estão vazios, tente novamente.')
  } else if (alcool.value.length == 0) {
    alert('O campo "Álcool" está vazio, tente novamente.')
  } else if (gasolina.value.length == 0) {
    alert('O campo "Gasolina" está vazio, tente novamente.')
  } else {
    if ((Number(alcool.value) / Number(gasolina.value)) >= 0.7) {
      return document.getElementById('res').innerText = 'Melhor utilizar Gasolina'
    } else {
      return document.getElementById('res').innerText = 'Melhor utilizar Álcool'
    }
  }
})
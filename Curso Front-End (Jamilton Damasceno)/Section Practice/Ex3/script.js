let form = document.getElementsByTagName('form')[0]
const listaCadastro = []

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome')
  const sobrenome = document.getElementById('sobrenome')
  const email = document.getElementById('email')
  const ul = document.getElementsByTagName('ul')[0]

  const li = document.createElement('li')
  const informacao = document.createTextNode(`${nome.value} ${sobrenome.value} | ${email.value}`)
  li.appendChild(informacao)

  ul.appendChild(li)
})
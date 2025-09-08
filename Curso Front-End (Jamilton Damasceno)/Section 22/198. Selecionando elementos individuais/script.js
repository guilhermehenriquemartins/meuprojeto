let titulo = document.getElementById("titulo")
titulo.style.textDecoration = "underline"

let titulo2 = document.getElementById("titulo2")
titulo2.style.color = "orange"

let paragrafo = document.querySelector("#paragrafo")
paragrafo.style.textIndent = "20px"

console.log(titulo)


function clicou() {
  let item = document.querySelector('li.primeiro')
  item.style.backgroundColor = "red"
  item.textContent = 'Clicou!'
}

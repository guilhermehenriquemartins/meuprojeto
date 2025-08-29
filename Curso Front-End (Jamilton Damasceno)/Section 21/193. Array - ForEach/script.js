const lista = ["Guilherme", "Ana", "Marcela", "Pedro"]

//forEach percorre cada elemento do array e assim podemos utilizar uma função para fazermos algo com esses itens, p.ex: fazer filtros, validações, etc.


//nesse caso vamos utilizar uma função somente para fazer exibição do item
function percorrer(item, indice, array) {
  console.log(item, indice)
}

lista.forEach(percorrer) //forEach percorre cada elemento da array chamando a função que inserimos
const estados = ["São Paulo", "Ceará", "Rio de Janeiro", "Bahia", "Minas Gerais"]

/***Remove elementos do array */
//estados.pop() //remove último
//estados.shift() //remove primeiro

/*** Adiciona novo elemento no array */
//estados.unshift("Maranhão")

/*** Retorna novo array */
//const novo = estados.splice(1, 2, "Santa Catarina", "Espírito Santo")
//const novo = estados.slice(1,2)

/*** Converte Array / String */
let texto = estados.join()

console.log(texto)
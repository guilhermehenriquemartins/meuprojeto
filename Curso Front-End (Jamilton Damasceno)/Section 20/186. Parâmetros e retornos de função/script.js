//Parâmetros padrão

function somar(n1=0, n2=0) {
  return n1 + n2
}

//console.log(somar(3, 'eu'))


//Parâmetros e retornos opcionais

function calcularSalario(salario, desconto) {
  desconto = isNaN(desconto) ? 0 : desconto
  return salario - desconto
}

let resultado = calcularSalario(100, 20)
console.log(resultado)

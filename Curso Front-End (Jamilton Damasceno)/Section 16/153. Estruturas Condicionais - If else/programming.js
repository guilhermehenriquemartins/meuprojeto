/* 
1) Desligar a torneira
2) Pedir copo de água
3) Ir ao mercado comprar arroz
*/

function desligarTorneira() {
  console.log('Desliguei a torneira')
}

desligarTorneira()

function comprar(produto, dinheiro) {
  if (dinheiro >= 35.90) {
    let troco = dinheiro - 35.90
    return `arroz de 1kg / troco de ${troco.toFixed(2)}`
  } else if (dinheiro >= 17.45) {
    let troco = dinheiro - 17.45
    return `arroz de 500g / troco de ${troco.toFixed(2)}`
  } else {
    return 'nada'
  }
}

console.log(comprar(20))
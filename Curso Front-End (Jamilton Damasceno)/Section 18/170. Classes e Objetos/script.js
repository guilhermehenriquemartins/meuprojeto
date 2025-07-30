//OBJETO LITERAL
/*const caderno_mod1 = {
  cor: 'preto',
  medida: '140x200mm',
  qtd_folhas: 80,
  tipo: 'Iscool Disc Prime',
  coleção: 'Solid Colors',

  abrir: function() {
    return 'Abriu Caderno'
  },

  folhear: function() {
    return 'Folheou Caderno'
  },

  fechar: function() {
    return 'Fechou Caderno'
  }
}

caderno_mod1.cor = 'vermelho'
console.log(caderno_mod1.cor)
*/

//OBJETO VAZIO
/*const caderno_mod1 = new Object()
caderno_mod1.cor = 'preto'
caderno_mod1.medida = '140x200mm'
caderno_mod1.qtd_folhas = 80
caderno_mod1.tipo = 'Iscool Disc Prime'
caderno_mod1.coleção = 'Solid Colors'
caderno_mod1.abrir = function() {
  return 'Abriu Caderno'
}
caderno_mod1.folhear = function() {
  return 'Folheou Caderno'
}
caderno_mod1.fechar = function() {
  return 'Fechou Caderno'
}

caderno_mod1.cor = 'vermelho'
console.log(caderno_mod1.cor)
*/

//OBJETO ATRAVÉS DA CLASSE

class caderno {
  constructor() {
    this.cor = 'preto'
    this.medida = '140x200mm'
    this.qtd_folhas = 80
    this.tipo = 'Iscool Disc Prime'
    this.colecao = 'Solid Colors'
  }

  abrir() {
    return 'Abriu Caderno'
  }

  folhear() {
    return 'Folheou Caderno'
  }

  fechar() {
    return 'Fechou Caderno'
  }
}

const caderno_mod1 = new caderno()
const caderno_mod2 = new caderno()

caderno_mod1.cor = 'vermelho'
console.log(caderno_mod2.cor)
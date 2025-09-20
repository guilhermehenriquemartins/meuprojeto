window.addEventListener('load', function() {
  let selecao = document.getElementById('tema')

  function alterarTema() {
    switch(selecao.value) {
      case 'claro':
        document.body.className = "light-mode"
        break
      case 'escuro':
        document.body.className = "dark-mode"
        break
      case 'sepia':
        document.body.className = 'sepia-mode'
        break
      default:
        document.body.className = ''
    }
  }

  selecao.addEventListener('change', alterarTema)
})
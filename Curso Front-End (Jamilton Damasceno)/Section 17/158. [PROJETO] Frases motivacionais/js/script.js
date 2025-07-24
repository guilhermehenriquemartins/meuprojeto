const frases = [
  'Tente de novo. Fracasse de novo. Mas fracasse melhor.', 
  'Muda tuas ideias e mudarás teu mundo.',  
  'Os problemas são oportunidades para se mostrar o que sabe.', 
  'Em busca do ótimo não se faz o bom.',
  'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.', 
  'Sorte é o que acontece quando a preparação encontra a oportunidade.', 
  'O único lugar que o sucesso vem antes do trabalho é no dicionário.', 
  'É tentando o impossível que se chega à realização do possível.', 
  'Um objetivo nada mais é do que um sonho com limite de tempo.']

function clicou() {
  let numeroAleatorio = Math.floor(Math.random() * (frases.length-1))
  let secao = window.document.getElementsByTagName('section')[0].innerText = frases[numeroAleatorio]
  return secao
}
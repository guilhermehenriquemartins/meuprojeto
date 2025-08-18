// Funções construtoras

//Em versões anteriores do JavaScript, os objetos eram criados utilizando funções construtoras
//OBS: ATUALMENTE UTILIZA-SE CLASS PARA CRIAR OBJETOS, PORÉM AINDA É POSSÍVEL VER PROJETOS UTILIZANDO FUNÇÕES CONSTRUTORAS
//OBS: A BASE DO JAVASCRIPT É A UTILIZAÇÃO DE FUNÇÕES

/*Para criar objetos, já vimos até aqui:
• Objeto Literal
• Classe
• Função Construtora
*/

class Produto {

}

const Produto = function() {

}

//Criar objetos com class e com Função Construtora darão no mesmo resultado, (isso porque por detrás de uma classe, também utiliza-se uma função para ser construído, utilizar class é somente uma maneira mais fácil de escrever e é uma sintaxe mais próxima de outras Linguagens Orientadas a Objetos)

//OBS: Lembrando que classes e funções construtoras não são objetos, mas ambas são funções para serem criados objetos a partir delas quando utilizamos a palavra 'new' ao instanciá-las. Ex: const caneca = new Produto()
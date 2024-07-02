/*
Nome      : app01
Finalidade: Curso de JavaScript: conhecendo objetos
Observação: 01 O que são objetos
Data      : 23/06/2024
*/

const read = require('readline-sync');
const color = require('@colors/colors');
console.clear();
function pare(){
  console.log();
  const ordem = Number(read.question("Pressione a tecla <enter> para continuar... ou 9 + <enter> para parar: ")).toFixed(0);
  if(ordem==9){
    console.log('End-of-Job'.green);
    process.exit();
  } 
  console.clear();
}

//# 1
console.log("1 - Crie um arquivo chamado livro.js. Nesse arquivo, crie um objeto livro que represente as informações de um livro. O objeto deve conter as seguintes propriedades:".cyan);
console.log("");
console.log("    - titulo (string): título do livro.".cyan);
console.log("    - autor (string): nome do autor do livro.".cyan);
console.log("    - anoPublicacao (number): ano de publicação do livro.".cyan);
console.log("    - genero (string): gênero do livro.".cyan);
console.log("");
console.log("    No final do arquivo livro.js, instancie o objeto livro com dados de algum livro que você goste e imprima os detalhes do livro no console.".cyan);
const livro = {
  titulo: "JavaScript The Definitive Guide",
  autor: "David Flanagan",
  anoPublicacao: 2020,
  genero: "Informática"
}
console.log(`Informações do Livro: 
  título       :  ${livro.titulo} 
  autor        :  ${livro.autor}
  anoPublicação:  ${livro.anoPublicacao}
  genero       :  ${livro.genero}`);
pare();

//# 2
console.log('2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.'.cyan);
console.log("");
console.log("    - Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.".cyan);
console.log("    - Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.".cyan);
console.log("    - Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.".cyan);
let anoAtual = new Date().getFullYear();
console.log(anoAtual);
livro.idadePublicacao = anoAtual - livro.anoPublicacao;
console.log("Detalhes do livro \n" +
  "titulo          : " + livro.titulo + "\n" +
  "autor           : " + livro.autor + "\n" +
  "anoPublicacao   : " + livro.anoPublicacao + "\n" +
  "genero          : " + livro.genero + "\n" +
  "idadePublicacao : " + livro.idadePublicacao);
pare();

//# 3
console.log("3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e imprimir no console os detalhes do livro.".cyan);
function exibeDetalhesLivro(propriedade) {
  console.log(propriedade);
  console.log(` ${livro[propriedade]}`);
}
exibeDetalhesLivro(['titulo']);
exibeDetalhesLivro(['autor']);
exibeDetalhesLivro(['anoPublicacao']);
exibeDetalhesLivro(['genero']);
exibeDetalhesLivro(['idadePublicacao']);
pare();

//# 4
console.log("4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois, adicione uma nova propriedade chamada avaliacao. Esta propriedade deve ser inicializada como null.".cyan);
console.log("");
console.log("    - No final do arquivo livro.js, adicione uma avaliação ao objeto.".cyan);
console.log("    - Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.".cyan);
console.log("    - Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.".cyan);
livro.avaliacao = null;
console.log(livro);
livro.avaliacao = 3;
if(livro.avaliacao == null) {
  livro.avaliacao = 5; 
} else {
  console.log("Livro ja possui avaliação ");
  exibeDetalhesLivro(['avaliacao']);
}
console.log(livro);
pare();

//# 5
console.log('5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Depois altere o gênero do livro para "Aventura".'.cyan);
console.log(livro);
livro.genero = "Aventura";
console.log(livro);
pare();

//# 6
console.log("6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. Em seguida, exclua a propriedade avaliacao do objeto livro. Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.".cyan);
delete livro.avaliacao;
console.log(livro);
pare();
console.log('End-of-Job'.green);





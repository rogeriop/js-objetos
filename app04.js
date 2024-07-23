/*
Nome      : app04
Finalidade: Curso de JavaScript: conhecendo objetos
Observação: 04 Conhecendo JSON
Data      : 20/07/2024
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
function ok() {
  console.log("ok");
}
function pula() {
  console.log("");
}

//# 1 #######################################################################
console.log("1 - Crie um arquivo chamado dados.json contendo informações fictícias em formato JSON. O arquivo pode representar, por exemplo, dados de produtos, usuários ou qualquer outra informação que você deseje.".cyan);
ok();
console.log("  a) Crie um arquivo chamadoutilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.".cyan);
const dados = require("./dados/dados.json");
ok();
console.log("  b) Imprima no console o conteúdo importado utilizando a função console.log().\n".cyan);
console.log(dados);
console.log("  c) Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.\n");

//const dados = JSON.parse(dadosAux);
console.log("** PRODUTOS **")
console.log(dados.produtos[0].nome);
console.log(dados.produtos[0].preco);
console.log(dados.produtos[1].nome);
console.log(dados.produtos[1].preco);
pula();
console.log("** USUÁRIOS **");
console.log(dados.usuarios[0].nome + " " + (dados.usuarios[0].email).green);
console.log(dados.usuarios[1].email + " " + (dados.usuarios[1].email).green);
pare();

//# 2 #######################################################################
console.log("2 - Crie um objeto JavaScript representando informações de um produto. O objeto deve conter pelo menos as seguintes propriedades:".cyan);
console.log("id (number): identificador do produto.".cyan);
console.log("nome (string): nome do produto.".cyan);
console.log("preco (number): preço do produto.".cyan);
const produto = {
  id: 1,
  nome: "Camiseta",
  preco: 70.00
}
ok();
console.log("    Converta o objeto produto para uma string utilizando JSON.stringify() e imprima no console a string resultante.\n".cyan);
const produtoString = JSON.stringify(produto);
console.log(produtoString);
pare();

//# 3 #######################################################################
console.log("3 - Crie um arquivo chamado animais.json, contendo informações fictícias em formato JSON. O arquivo pode representar dados de animais, incluindo pelo menos três elementos no array.".cyan);
ok();
console.log("     Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:".cyan);
console.log("  a) Leia o conteúdo do arquivo animais.json.".cyan);
const ObjAnimais = require("./dados/animais.json");
ok();
console.log("  b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().".cyan);
ok();
console.log("  c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.".cyan);
const animal = {
  id: 4,
  nome: "Macaco",
  tipo: "Mamífero",
  habitat: "Floresta"
}
ObjAnimais.animais.push(animal);
console.log(ObjAnimais);
console.log(" d) Modifique o habitat de um animal existente no array de animais.".cyan);
ObjAnimais.animais[2].habitat = "Floresta";
ok();
console.log(" e) Remova um animal do array de animais.".cyan);
ObjAnimais.animais.splice(2,1);
ok();
console.log(" f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().\n".cyan);
const stringAnimais = JSON.stringify(ObjAnimais)
console.log(stringAnimais);
console.log(" g) Imprima no console o objeto JavaScript resultante das operações.".cyan);
console.log(ObjAnimais);
pare();

//# 4 #######################################################################
console.log("4 - Crie um objeto JavaScript representando informações de uma pessoa. O objeto deve conter as seguintes propriedades:\n".cyan);
console.log("id (number): identificador da pessoa.".cyan);
console.log("nome (string): nome da pessoa.".cyan);
console.log("idade (number): idade da pessoa".cyan);
const pessoaOriginal = {
  id: 1,
  nome: "Alice",
  idade: 30
}
ok();
console.log("  a) Crie uma função que receba um objeto JavaScript e retorne um novo objeto. Utilize esta função para fazer uma cópia do objeto pessoaOriginal.".cyan);
function fazCopiaDeObjeto (objetoIn) {
  return JSON.parse(JSON.stringify(objetoIn));
}
const novoObjeto = fazCopiaDeObjeto(pessoaOriginal);
ok();
console.log("  b) Modifique a cópia do objeto obtido através da função, adicionando ou alterando pelo menos uma propriedade.".cyan);
novoObjeto.idade = 65;
ok();
console.log("  c) Imprima no console ambos os objetos (o original e o modificado) para verificar que as alterações feitas no objeto modificado não afetaram o objeto original.\n".cyan);
console.log("** pessoaOriginal **");
console.log(pessoaOriginal);
console.log("** novoObjeto **");
console.log(novoObjeto);
console.log('End-of-Job'.green);

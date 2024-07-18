/*
Nome      : app02
Finalidade: Curso de JavaScript: conhecendo objetos
Observação: 02 Manipulando objetos
Data      : 02/07/2024
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


//# 1
console.log("1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:".cyan
);
console.log("");
console.log("    - nome (string): Nome da pessoa.".cyan);
console.log("    - idade (number): Idade da pessoa.".cyan);
console.log("    - solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).".cyan);
console.log("    - hobbies (array): Lista de hobbies da pessoa.".cyan);
console.log("");
console.log("- Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.".cyan);
console.log("- Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.".cyan);
console.log("- No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.".cyan);
console.log("");
console.log("Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.".cyan);

infoPessoa = {
  nome: "José dos Grudes",
  idade: 24,
  solteiro: true,
  hobbies: ["música", "costura"]
}

function mostraInfoPessoa (pessoa) {
  console.log("");
  console.log("** Informações sobre Pessoa ** \n");
  console.log(`Nome: ${pessoa.nome} tipo ${typeof pessoa.nome}`)
  console.log(`Idade: ${pessoa.idade} tipo ${typeof pessoa.idade}`)
  console.log(`Solteiro: ${pessoa.solteiro} tipo ${typeof pessoa.solteiro}`)
  console.log(`Hobbies: ${pessoa.hobbies.join(", ")} tipo ${typeof pessoa.hobbies}`)
}
mostraInfoPessoa(infoPessoa);
pare();

//# 2
console.log("2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:".cyan);
console.log("");
console.log("    - rua (string): nome da rua.".cyan);
console.log("    - cidade (string): nome da cidade.".cyan);
console.log("    - estado (string): nome do estado.".cyan);
console.log("");
console.log(" Preencha as subpropriedades do objeto endereco com valores fictícios.".cyan);
console.log(" Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.".cyan);
console.log(" No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.".cyan);

infoPessoa.endereco =  {
  rua: "Dos Mascates",
  cidade: "Arcaoverde",
  estado: "PE"
}
function mostraInfoPessoaEndereco (pessoa) {
  console.log("Endereço:");
  console.log(`    Rua: ${pessoa.endereco.rua} tipo ${typeof pessoa.endereco.rua}`);
  console.log(`    cidade: ${pessoa.endereco.cidade} tipo ${typeof pessoa.endereco.cidade}`);
  console.log(`    estado: ${pessoa.endereco.estado} tipo ${typeof pessoa.endereco.estado}`);
}
mostraInfoPessoa(infoPessoa);
mostraInfoPessoaEndereco(infoPessoa);
pare();

//# 3
console.log("3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:".cyan);
console.log("");
console.log("    - nome (string): nome da pessoa.".cyan);
console.log("    - idade (number): idade da pessoa.".cyan);
console.log("    - cidade (string): cidade de residência da pessoa. \n".cyan);
console.log(" a) Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas. ".cyan);
ok();

const pessoas = [];
pessoas.push({
  nome: "Zé Ruela",
  idade: 18,
  cidade: "Recife"
})
pessoas.push({
  nome: "Zé dos Grudes",
  idade: 40,
  cidade: "João Pessoa"
})
pessoas.push({
  nome: "Maria Vai Com Outras",
  idade: 19,
  cidade: "Natal"
})

console.log(" b) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista. \n".cyan);

function mostrarListaPessoas (elemento, indice) {
  console.log(elemento);
}
pessoas.forEach(mostrarListaPessoas);
pula();

console.log(" c) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.".cyan);

pessoas.push({
  nome: "Maria Joelma",
  idade: 17,
  cidade: "Maceio"
})
ok();

console.log(" d) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.\n".cyan);

pessoas.forEach((elemento, indice) => console.log(elemento));
pula();

console.log(" e) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros. A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.".cyan);

function filtrarPorCidade (pessoas, cidade) {
  return pessoas.filter((elemento) => elemento.cidade === cidade);
}
ok();

console.log(" f) Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido. \n".cyan);

console.log(filtrarPorCidade(pessoas, "Maceio"));
pare();

//# 4
console.log("4 - Crie um objeto chamado calculadora que terá os seguintes métodos:\n".cyan);
console.log("    - soma: uma função que aceita dois parâmetros e retorna a soma deles.".cyan);
console.log("    - subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.".cyan);
console.log("    - multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.".cyan);
console.log("    - divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. ".cyan);
console.log("Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso. \n".cyan);


const calculadora = {
  soma: function (a, b) {
    return Number(a) + Number(b);
  },
  subtracao: function (a, b) {
    return Number(a) - Number(b);
  },
  multiplicacao: function (a, b) {
    return a * b;
  },
  divisao: function (a, b) {
    return b != 0 ? a / b : -1;
  }
}
ok();
console.log(" a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos. \n".cyan);

let a = 0;
let b = 0;

function interage() {
  a = Number(read.question("Informe primeiro valor: ")).toFixed(0);
  b = Number(read.question("Informe segundo valor: ")).toFixed(0);
}
console.log("** SOMA **");
interage();
console.log(calculadora.soma(a, b));
pula();
console.log("** SUBTRAÇÃO **");
interage();
console.log(calculadora.subtracao(a, b));
pula();
console.log("** MULTIPLICAÇÃO **");
interage();
console.log(calculadora.multiplicacao(a, b));
pula()
console.log("** DIVISÃO **");
interage();
console.log(calculadora.divisao(a, b));
pula();

console.log(" b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.".cyan);

calculadora.media = function (a) {
  const total = a.reduce((acumulador, nota) => {return acumulador + nota}, 0);
  return total / a.length;
}
ok();

console.log(" c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.\n".cyan);
const lista = [10, 20, 30, 40];
console.log("** MÉDIA **");
console.log(calculadora.media(lista));
pula();
pare();

//# 5
console.log("5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:\n".cyan);
console.log("    - titular: uma string representando o titular da conta.".cyan);
console.log("    - saldo: um número representando o saldo da conta.".cyan);
console.log("    - depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.".cyan);
console.log("    - sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo.\n".cyan);
console.log(" Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.".cyan); 

const contaBancaria = {
  titular: "Frusteco",
  saldo: 0,
  depositar: function(valor) {
    this.saldo = this.saldo + valor;
  },
  sacar: function(valor) {
    if (this.saldo >= valor) {
      this.saldo = this.saldo - valor;
      return 0;
    } else {
      return -1;
    }
  }
}
ok();

console.log(" Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes \n".cyan);
console.log("propriedades:".cyan)
console.log("    - nome: uma string representando o nome do cliente.".cyan);
console.log("    - conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).\n".cyan);
const cliente = {
  nome: "Frusteco",
  conta: contaBancaria
}
ok();
console.log("   a) Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.\n".cyan);

function mostrarSaldo(cliente) {
  console.log(`Nome do Cliente: ${cliente.nome}`);
  console.log(`Saldo : ${(cliente.conta.saldo).toFixed(2)}`)
}
ok();
console.log("   b) Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.\n".cyan);

mostrarSaldo(cliente);
pula();
console.log("** VAMOS DEPOSITAR");
let valor = Number(read.question("Informe Valor:").replace(',','.'));
cliente.conta.depositar(valor);

console.log(mostrarSaldo(cliente));
pula();
console.log("** VAMOS SACAR **");
valor = Number(read.question("Informe Valor:").replace(',','.'));
cliente.conta.sacar(valor);

mostrarSaldo(cliente);
pula();
console.log('End-of-Job'.green);


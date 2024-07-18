/*
Nome      : app03
Finalidade: Curso de JavaScript: conhecendo objetos
Observação: 03 Percorrendo objetos
Data      : 15/07/2024
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
console.log("1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.".cyan);

const pessoa = {
  nome: "Frusteco da Silva Sauro",
  notas: [10, 10, 9, 8, 7],
  calcularMediaNotas: function() {
    let soma = this.notas.reduce((acumulado, nota) => acumulado + nota, 0);
    return soma / this.notas.length;
  }
}
ok();

console.log("  a) Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:\n".cyan);
console.log("     Desempenho excelente: média >= 9".cyan);
console.log("     Bom desempenho: 7.5 <= média entre 7.6 e 8.9".cyan);
console.log("     Desempenho regular: 6 <= média entre 6 e 7.5".cyan);
console.log("     Desempenho insuficiente: média < 6\n".cyan);

pessoa.classificaDesempenho = function() {
  let media = this.calcularMediaNotas();
  let msg = "";
  if(media < 6) {
    msg = "Desempenho insuficiente";
  } else {
    if (media >= 6 && media <= 7.5) {
      msg = "Desempenho regular";
  } else {
    if (media >= 7.6 && media <= 8.9) {
      msg = "Bom desempenho"
    } else {
      if (media >= 9) {
        msg = "Desempenho excelente";
      }
    }
  }

  return msg;
}
}
ok();

console.log("  b) Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.".cyan);
pula();
console.log(`Média: ${pessoa.calcularMediaNotas()}`);

console.log("  c) Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.".cyan);
pula();
console.log(`Desempenho: ${pessoa.classificaDesempenho()}`);
pare()


//# 2 #######################################################################
console.log("2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:\n".cyan);
console.log("     marca (string): marca do carro.".cyan);
console.log("     modelo (string): modelo do carro.".cyan);
console.log("     ano (number): ano de fabricação do carro.".cyan);
console.log("     cor (string): cor do carro.\n".cyan);

const carro = {
  marca: "Ford",
  modelo: "Ka",
  ano: "2007",
  cor: "prata"
}
ok();

console.log("  a) Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.\n".cyan);

function mostraObjeto(objeto) {
  for (let chave in objeto) {
    console.log(` ${chave}: ${objeto[chave]}`);
  }
}
mostraObjeto(carro);
pula();

console.log("  b) Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.\n".cyan);
carro.especie = "passageiro";
carro.tipo = "automovel";
ok();

console.log("  c) Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.\n".cyan);
mostraObjeto(carro);
pare();

//# 3 #######################################################################
console.log("3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.".cyan);
console.log("  Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:\n".cyan);

delete carro.especie;
delete carro.tipo;
mostraObjeto(carro);

console.log("  a) ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.".cyan);
carro.ligado = false;
ok();
console.log("  b) ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.".cyan);
carro.ligar = function(){
  if(!this.carro) this.carro = true;
  console.log("Carro ligado!")
}
ok();
console.log("  c) desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.".cyan);
carro.desligar = function() {
  if(this.carro) this.carro = false;
  console.log("Carro está desligado!");
}
ok();
console.log("  d) obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).\n".cyan);
carro.obterDetalhes = function() {
  const estado = this.ligado ? 'ligado' : 'desligado';
  return `Detalhes do carro:\nMarca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nCor: ${this.cor}\nEstado: ${estado}`;
};
console.log("  Em seguida, faça o seguinte:".cyan);
console.log("  a) Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.".cyan);
console.log("**MÉTODO LIGAR CARRO CHAMADO**");
carro.ligar();
console.log("**MÉTODO DESLIGAR CARRO CHAMADO**");
carro.desligar();

console.log("  b) Chame o método obterDetalhes e imprima no console a string retornada.\n".cyan);
console.log(carro.obterDetalhes());

pare();

//# 4 #######################################################################
console.log("4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.\n".cyan);

carro.placa = "AAA-1111";
Object.defineProperty (carro, "placa", {enumerable:false });
ok();
console.log("  a) Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.\n".cyan);
for (let chave in carro) {
  console.log(chave);
}
console.log("  b) Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.\n".cyan);
const chavesCarro = Object.keys(carro);
console.log(chavesCarro);

console.log("  c) Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.\n".cyan);
console.log(carro.placa);
pare();

//# 5 #######################################################################
console.log("5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:\n".cyan);
console.log("  marca (string): marca do novo carro.".cyan);
console.log("  modelo (string): modelo do novo carro.".cyan);
console.log("  ano (number): ano de fabricação do novo carro.".cyan);
console.log("  cor (string): cor do novo carro.const".cyan);
const carroNovo = { 
  marca: "Chevrolet",
  modelo: "Opala",
  ano: 1971,
  cor: "Preto"
}
ok();
console.log("  a) Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as propriedades do objeto carro e adicione as propriedades do objeto carroNovo.".cyan);
const carroComNovosDetalhes = {
  ...carro, ...carroNovo
}
ok();
console.log("  b) Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.\n".cyan);
console.log(carroComNovosDetalhes);
console.log("  c) Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.\n".cyan);
carroComNovosDetalhes.cor = "Branco";
console.log(carroComNovosDetalhes);

console.log('End-of-Job'.green);








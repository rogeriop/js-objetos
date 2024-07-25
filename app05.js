/*
Nome      : app05
Finalidade: Curso de JavaScript: conhecendo objetos
Observação: 05 Manipulando listas de objetos
Data      : 23/07/2024
*/

const read = require('readline-sync');
const { pare, ok, pula } = require('./app00.js');
const color = require('@colors/colors');
console.clear();

//# 1 #######################################################################
console.log("1 - Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan);
console.log("    id (number): identificador do livro.".cyan);
console.log("    titulo (string): título do livro.".cyan);
console.log("    autor (string): nome do autor.".cyan);
console.log("    anoPublicacao (number): ano de publicação do livro.\n".cyan);
const biblioteca = [
  { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
  { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
  { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
]

console.log(biblioteca);
pula();
console.log("  a) Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.".cyan);
function encontrarLivroPorId (id) {
  return biblioteca.find((item) => item.id == id) || null;
}
ok();
console.log("  b) Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.\n".cyan);
const idLivro = read.question("Informe o id de um livro: ");
console.log(encontrarLivroPorId(idLivro));
pare();

//# 2 #######################################################################
console.log("2 - Crie um array de objetos JavaScript representando informações de filmes. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan);
console.log("    id (number): identificador do filme.".cyan);
console.log("    titulo (string): título do filme.".cyan);
console.log("    diretor (string): nome do diretor.".cyan);
console.log("    anoLancamento (number): ano de lançamento do filme.".cyan);
const catalogoFilmes = [
  { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
  { id: 2, titulo: "Jurassic Park", diretor: "Steven Spielberg", anoLancamento: 1993 },
  { id: 3, titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 }
]
console.log(catalogoFilmes);
console.log("  a) Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.".cyan);
function filtrarFilmesPorAno (ano) {
  return catalogoFilmes.filter((filme) => filme.anoLancamento == ano);
}
ok();
console.log("  b) Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.\n".cyan);
const anoFilme = read.question("Informe ano do filme: ");
console.log(filtrarFilmesPorAno(anoFilme));
pare();

//# 3 #######################################################################
console.log("3 - Crie um array de objetos JavaScript representando informações fictícias de produtos. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan);
console.log("    id (number): identificador do produto.".cyan);
console.log("    nome (string): nome do produto.".cyan);
console.log("    preco (number): preço do produto.\n".cyan);
const listaProdutos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça Jeans", preco: 49.99 },
  { id: 3, nome: "Tênis", preco: 79.99 },
  { id: 4, nome: "Boné", preco: 15.99 }
]
console.log(listaProdutos);
pula();
console.log("  a) Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.".cyan);
function filtrarOrdenarProdutosPorPreco(maxPreco) {
  listaProdutos.sort((a, b) => {
    if(a.preco < b.preco) return -1;
    if(a.preco > b.preco) return 1;
    return 0;
  })
  return listaProdutos.filter((produto) => produto.preco <= maxPreco);
}

console.log("  b) Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.\n".cyan);
const maxPreco = Number(read.question("Informe o valor: ").replace(",",".")).toFixed(2);
console.log(filtrarOrdenarProdutosPorPreco(maxPreco));

pare();

//# 4 #######################################################################
console.log("4 - Crie um array de objetos JavaScript representando informações de animais. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan);
console.log("    id (number): identificador do animal.".cyan);
console.log("    nome (string): nome do animal.".cyan);
console.log("    especie (string): espécie do animal.".cyan);
console.log("    idade (number): idade do animal.\n".cyan);
const animais = [
  { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
  { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
  { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 }
]
console.log(animais);
pula();
console.log("  a) Crie uma função chamada ordenarAnimais que receba como parâmetro uma função de comparação para realizar a ordenação do array.".cyan);
console.log("     Você pode criar funções para fazer a ordenação crescente ou decrescente:".cyan);
function ordenarAnimais (lista, propriedade) {
  return lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) return -1;
    if (a[propriedade] > b[propriedade]) return 1;
    return 0;
  })
}
ok();
console.log("** TESTE A FUNÇÃO ");
const propriedade = read.question("Informe a propriedade: ");
const listaOrdenada = ordenarAnimais(animais, propriedade);
console.log(listaOrdenada);
pare();

//# 5 #######################################################################
console.log("5 - Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades:\n".cyan);
console.log("id (number): identificador do departamento.".cyan);
console.log("nome (string): nome do departamento.".cyan);
console.log("funcionarios (array): array de objetos representando funcionários do departamento.\n".cyan);
const departamentos = [
  {
      id: 1,
      nome: "Vendas",
      funcionarios: [
          { id: 101, nome: "Ana", cargo: "Vendedor" },
          { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
      ]
  },
  {
      id: 2,
      nome: "TI",
      funcionarios: [
          { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
          { id: 202, nome: "João", cargo: "Analista de sistemas" }
      ]
  }
]
console.log(departamentos[0]);
console.log(departamentos[1]);
pula();
console.log("  a) Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.".cyan);
function encontrarFuncionarioPorId(id) {
  for (const departamento of departamentos) {
      const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id == id);
      if (funcionarioEncontrado) {
          return funcionarioEncontrado;
      }
  }
  return null;
}
ok();
console.log("  b) Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado.\n".cyan);
const idFuncionario = Number(read.question("Informe o id do Funcionario: ")).toFixed(0);
console.log(encontrarFuncionarioPorId(idFuncionario));

console.log('End-of-Job'.green);


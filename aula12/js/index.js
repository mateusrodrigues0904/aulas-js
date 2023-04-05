let texto = document.getElementById("itexto");
const pessoa = ["Mateus", "Rodrigues", 19, "Estudante"];
pessoa.pop(); // remove o último item do array
pessoa.push("Verificado"); // adiciona um elemento no array no final
pessoa.shift(); // remove o primeiro item do array
pessoa.unshift("José"); // adiciona um item na primeira posição do array
pessoa.splice(1, 0, "Item adicionado 1", "Item adicionado 2");
texto.innerHTML = pessoa.join(" * "); // altera o que está entre os elementos do array
const lista1 = ["Arroz", "Feijão", "Leite", "Macarrão"];
const lista2 = ["Suco", "Refrigerante", "Carne"];
const lista3 = ["Salgadinho"];
const superLista = lista1.concat(lista2, lista3); // concatenação de duas listas
texto.innerHTML = superLista;

const jogadores = [
  "Biro Biro",
  "Ribamar",
  "Pelé",
  "Maradona",
  "Neymar",
  "Cristiano Ronaldo",
  "Vampeta",
  "Dimitri",
];
const craques = jogadores.slice(2, 6); // fatia um array a partir do índice indicado
const jogOrdem = jogadores.sort(); // deixa os itens do array em ordem alfabética
const jogOrdemRev = jogadores.reverse(); // inverte a ordem alfabética

texto.innerHTML = jogOrdemRev;

const numeros = [40, 100, 1, 5, 25, 10];
numeros.sort(function (a, b) {
  // função para deixar em ordem crescente ou decrescente (somente inverter de a - b para b - a)
  return a - b;
});
function MaiorNumero(array) {
  // função para pega o maior número dentro de um array
  return Math.max.apply(null, array);
}
function MenorNumero(array) {
  return Math.min.apply(null, array); // função para pegar o menor número dentro de um array
}
function filtragem(value, index, array) {
  return value > 20;
}
const maior20 = numeros.filter(filtragem);
texto.innerHTML = MenorNumero(numeros);
texto.innerHTML = maior20;

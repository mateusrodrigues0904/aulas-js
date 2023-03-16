// matriz/array/lista - É a mesma coisa só que em inglês

const lista1 = ["arroz", "feijão", "macarrão", "leite"];
console.log(lista1[0]);
let x = lista1[3];
console.log(x);
lista1[0] = "Café"; // substituição de itens dentro do array
console.log(lista1);

const lista2 = [];
lista2[0] = "João";
lista2[1] = "Maria";
console.log(lista2);

const lista3 = new Array("arroz", "feijão"); // mesma coisa da lista 1

const pessoaA = ["Mateus", "Rodrigues", 19]; // array
const pessoaO = { nome: "Mateus", sobrenome: "Rodrigues", idade: 19 }; // objeto
pessoaA.push("Brasileiro"); // adiciona um item ao final da lista
pessoaA[4] = "Estudante"; // também adiciona ao final ou posterior da lista

console.log(pessoaA.length); // para saber quantos itens tem em um array
console.log(pessoaA[pessoaA.length - 1]); // retorna o último item de um array
console.log(Array.isArray(pessoaA)); // Alerta se é um array ou não

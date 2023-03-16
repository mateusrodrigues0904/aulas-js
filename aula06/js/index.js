// No JavaScript tem 3 tipos de declarações de variáveis
// let = a variável fica invariável
// const = constante, ou seja, não pode mudar em lugar nenhum
// var

var a, b, c;

var pote = "bombom";
console.log(pote);

a = 2;
b = 3;
c = a + b;
console.log(c);

var nome, sobrenome, nomeCompleto, idade;

nome = "Mateus";
sobrenome = "Rodrigues";
idade = 30;
nomeCompleto = nome + " " + sobrenome;
pessoa = nome + idade + 10;

console.log(pessoa);

let x = 10;

{
  let x = 2; // esse let só vai funcionar nesse bloco
}

console.log(x);

const y = 10;

{
 const y = 2; // o const não vai obedecer mudanças
}
console.log(y);

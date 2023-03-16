var valor1, valor2, total;

valor1 = 5;
valor2 = 2;

total = valor1 + valor2;
total = ++valor1;
total = --valor1;
// valor1  = valor1 + valor2; é igual a:
valor1 += valor2;
console.log(total);
console.log("O valor 1 ficou: " + valor1);

var idade, eleitor, resultado;

idade = 12;
eleitor = idade < 18 ? "não eleitor" : "eleitor";
console.log(eleitor);

// resultado = idade > 60 && idade < 70; && = and
// resultado = idade == 65 || idade == 72; || = or
resultado = !(idade == 65 || idade == 72); // o sinal ! diz que é o inverso
console.log(resultado);

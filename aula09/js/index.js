const carro = {
  marca: "ford",
  modelo: "ka",
  ano: 2015,
  placa: "ABC-1234",
  buzina: function () {
    console.log("som de buzina");
  },
  completo: function () {
    return "A marca é " + this.marca + " e o modelo é: " + this.modelo;
  },
};

console.log(carro);
console.log(carro.placa);
carro.buzina();
console.log(carro.completo());

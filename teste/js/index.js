function verificar() {
  var i, nascimento, idade, sexo, msg, img;
  msg = document.getElementById("imsg");
  img = document.getElementById("iimg");
  nascimento = document.getElementById("inas");
  nascimento = nascimento.value;
  idade = 2023 - nascimento;
  sexo = document.getElementsByName("sexo");
  for (i = 0; i < sexo.length; i++) {
    if (sexo[i].checked) {
      sexo = sexo[i].value;
    }
  }
  if (sexo == "M") {
    msg.innerHTML = `Detectamos um Homem com ${idade} anos.`;
    if (idade <= 10) {
      img.style.backgroundImage = "url('../img/mcrianca.jpg')";
    }
  }
}

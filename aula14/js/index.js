function verificaCor() {
  let cor = document.getElementById("icor").value;
  cor = cor.toLowerCase();
  switch (cor) {
    case "azul":
      document.body.style.backgroundColor = "blue";
      break;
    case "vermelho":
      document.body.style.backgroundColor = "red";
      break;
    case "verde":
      document.body.style.backgroundColor = "green";
      break;
    case "amarelo":
      document.body.style.backgroundColor = "yellow";
      break;
    default:
      document.getElementById(
        "itexto"
      ).innerHTML = `Nenhuma cor disponível para ${cor}.`;
  }
}

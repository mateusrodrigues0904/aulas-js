function eventoClick() {
  alert("Acionou um evento de click");
  document.body.style.backgroundColor = "yellow";
}
function eventoDblclick() {
  alert("Acionou um evento de Double Click");
  document.body.style.backgroundColor = "pink";
}
function viraAzul() {
  let div = document.getElementById("elemento");
  div.style.backgroundColor = "blue";
}
function viraVermelho() {
  let div = document.getElementById("elemento");
  div.style.backgroundColor = "red";
}
function adicionaTexto() {
  let p = (document.getElementById("texto").innerHTML = "O mouse moveu <br>");
}

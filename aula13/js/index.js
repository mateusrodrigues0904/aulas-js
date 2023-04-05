let interruptor = "on";

if (interruptor === "on") {
  console.log("A lampada está ligada.");
} else {
  console.log("A lampada está desligada.");
}

var hora = new Date().getHours();

if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else {
  console.log("Boa noite");
}
function verificar() {
  let nome = document.getElementById("inome").value;

  if (nome == "" || nome == null) {
    let p = document.getElementById("itexto");
    p.innerHTML = "o campo não pode ser vazio.";
    p.style.color = "red";
  } else {
    let p = document.getElementById("itexto");
    p.innerHTML = "válidado com sucesso.";
    p.style.color = "green";
  }
}

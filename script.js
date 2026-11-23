const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

function exibirMensagem(texto, valido) {
  mensagem.hidden = false;
  mensagem.textContent = texto;
  mensagem.className = "mensagem " + (valido ? "sucesso" : "erro");
}

// O formulário é válido quando B é maior que A.
function validar(a, b) {
  return b > a;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const textoA = document.getElementById("campoA").value;
  const textoB = document.getElementById("campoB").value;

  if (textoA === "" || textoB === "") {
    exibirMensagem("Preencha os dois campos com números.", false);
    return;
  }

  const a = Number(textoA);
  const b = Number(textoB);

  if (validar(a, b)) {
    exibirMensagem("Formulário válido! B (" + b + ") é maior que A (" + a + ").", true);
  } else {
    exibirMensagem("Formulário inválido. B (" + b + ") precisa ser maior que A (" + a + ").", false);
  }
});

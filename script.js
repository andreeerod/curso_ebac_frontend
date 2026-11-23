$(function () {
  const $formulario = $("#formulario");
  const $campo = $("#tarefa");
  const $lista = $("#lista");

  // Ao submeter o formulário, adiciona um <li> na lista
  $formulario.on("submit", function (evento) {
    evento.preventDefault();

    const nome = $campo.val().trim();

    if (nome === "") {
      $campo.addClass("invalido").trigger("focus");
      return;
    }

    $("<li>").text(nome).appendTo($lista);

    $campo.removeClass("invalido").val("").trigger("focus");
  });

  $campo.on("input", function () {
    $campo.removeClass("invalido");
  });

  // Ao clicar em um item, alterna a linha sobre o texto
  $lista.on("click", "li", function () {
    $(this).toggleClass("concluida");
  });
});

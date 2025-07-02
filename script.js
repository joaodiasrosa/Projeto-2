function abrirFormulario() {
  fetch('formulario.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById("conteudo").innerHTML = data;
    });
}

function abrirFrutas() {
  fetch('frutas.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById("conteudo").innerHTML = data;
    });
}

function abrirJogo() {
  fetch('jogo.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById("conteudo").innerHTML = data;
    });
}

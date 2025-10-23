const mudaCor = document.querySelector("#mudaCor");
let body = document.querySelector("body");
let titulo = document.querySelector(".titulo");
let containerColors = document.querySelector(".container-items");
let itensColor = document.querySelectorAll(".item-color");
let valorTitulo = document.getElementById("Idtitulo");
let reload = document.querySelector(".reload img");

function iconeCamera() {
  console.log("Ativou a camera");
}

// Função de adicionar e remover bordas do icone da camera
function adicionaBorda() {
  let iconeCamera = document.getElementById("iconeCamera");
  let classe = iconeCamera.getAttribute("class");
  iconeCamera.classList.add("adicionaBorda");
}

function retiraBorda() {
  let iconeCamera = document.getElementById("iconeCamera");
  let classe = iconeCamera.getAttribute("class");
  iconeCamera.classList.remove("adicionaBorda");
}

// Funcionalidade do icone de lapís, altera titulo e zera o valor
function limparTitulo() {
  valorTitulo.value = "";
  valorTitulo.focus();
}

// Caso não digite nada volta ao valor original
function valorDefault() {
  let pegarValor = valorTitulo.value;
  if (pegarValor.trim() === "") {
    valorTitulo.value = "Lista de tarefas";
  }
  setNewTitle(pegarValor);
}

// Para cada alteração no input atualiza o valor no armazenamento
valorTitulo.addEventListener("input", (event) => {
  let pegarValor = event.target.value;
  setNewTitle(pegarValor);
});

// Adciona função de alterar cor de fundo
mudaCor.addEventListener("input", (event) => {
  body.style.backgroundColor = event.target.value;
  titulo.style.backgroundColor = event.target.value;
});

// Função de clique que remove todas as informações salvas e
reload.addEventListener("click", () => {
  localStorage.clear();
  tasks = [];
  main.innerHTML = "";
  contadorPendente = 0;
  contadorConcluido = 0;
  contadorPrioritario = 0;
  quantidadePendentes.innerHTML = contadorPendente;
  quantidadeConcluido.innerHTML = contadorConcluido;
  quantidadePrioridade.innerHTML = contadorPrioritario;
  body.style.backgroundColor = "#eeee";
  titulo.style.backgroundColor = "#eeee";
  valorTitulo.value = "Lista de tarefas";
});


let contador = 0;
let contadorPendente = 0;
let contadorPrioritario = 0;
let contadorConcluido = 0;
let valorinput = 0;
let pegarinput = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let quantidadePendentes = document.getElementById("valoresPendente");
let quantidadeConcluido = document.getElementById("valoresConcluido");
let quantidadePrioridade = document.getElementById("valoresPrioridade");
let tasks = [];

// Função que recebe paremetro do contador e a situação para atualizar o array de tasks
function atualizaSituacao(id, situacao) {
  let index = tasks.findIndex((task) => task.tarefa === id);
  switch (situacao) {
    case "pendente":
      if (index != -1) {
        tasks[index].situacao = "item";
        setNewData();
      }
      break;
    case "clicado":
      if (index != -1) {
        tasks[index].situacao = "item clicado";
        setNewData();
      }
      break;
    case "prioridade":
      if (index != -1) {
        tasks[index].situacao = "item prioridade";
        setNewData();
      }
      break;
    case "deletar":
      if (index != -1) {
        tasks.splice(index, 1);
        setNewData();
      }
  }
}

// Função que armazena os itens no armazenamento local
function setNewData() {
  // Organiza o array de tasks colocando acima os itens prioridade e abaixo os itens clicados
  tasks.forEach((task) => {
    let selecionaItem = tasks.indexOf(task);
    switch (task.situacao) {
      case "item clicado":
        tasks.splice(selecionaItem, 1)[0];
        tasks.push(task);
        break;
      case "item prioridade":
        tasks.splice(selecionaItem, 1)[0];
        tasks.unshift(task);
        break;
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Função que recupera os itens do armazenamento local, caso não encontre apresenta três itens de exemplo
function getSavedData() {
  let tasksData = localStorage.getItem("tasks");
  tasksData = JSON.parse(tasksData);
  return tasksData && tasksData.length
    ? tasksData
    : [
        {
          tarefa: 1,
          situacao: "item prioridade",
          conteudo: "task 1",
          data: Date.now(),
        },
        {
          tarefa: 2,
          situacao: "item",
          conteudo: "task 2",
          data: Date.now(),
        },
        {
          tarefa: 3,
          situacao: "item clicado",
          conteudo: "task 3",
          data: Date.now(),
        },
      ];
}

// Função que armazena a cor mudada, ao confirmar a mudança
mudaCor.addEventListener("change", (event) => {
  localStorage.setItem("corDeFundo", JSON.stringify(event.target.value));
});

// Função que recupera valor da cor armazenada
function getSavedColor() {
  let corDeFundo = localStorage.getItem("corDeFundo");
  corDeFundo = JSON.parse(corDeFundo);
  return corDeFundo && corDeFundo.length ? corDeFundo : "";
}

// Função que recebe valor do input de titulo e armazena
function setNewTitle(pegarValor) {
  if (pegarValor == "Lista de tarefas") {
    localStorage.setItem("title", JSON.stringify(""));
  } else {
    localStorage.setItem("title", JSON.stringify(pegarValor));
  }
}

// Função que recupera valor do titulo salvo
function getSavedTitle() {
  let title = localStorage.getItem("title");
  title = JSON.parse(title);
  return title && title.length ? title : "";
}

// Função auto intocavél que acrescenta itens salvos no HTML, atualizando contadores e o array tasks
(function () {
  if (getSavedData().length != 0) {
    getSavedData().forEach((data) => {
      let itemSalvo = `<div id="${data.tarefa}" class="${data.situacao}">
            <div onclick="marcarTarefa(${data.tarefa})" class="item-icone">
                <img id="icone_${data.tarefa}" src="Img/circulo.png" class="imagem-circle">
            </div>
            <div onclick="marcarTarefa(${data.tarefa})" class="item-nome">
            <p class="valorTarefa">${data.conteudo}</p>
            </div>
            <div onclick="itemPriridade(${data.tarefa})" class="elementoPrioridade">
            <button id="prioridade_${data.tarefa}" class="buttonPrioridade"></button>
            <p>Prioridade</p>
            </div>
            <div class="item-botao">
                <button onclick="deletar(${data.tarefa})" class="delete">
                    <img id="icone-lixo_${data.tarefa}" src="Img/circule-o-lixo.png" class="imagem-lixo">
                    <p class="itemDeletar">Deletar</p>
            </div>
        </div>`;
      main.innerHTML += itemSalvo;

      tasks.push(data);
      setNewData();

      switch (data.situacao) {
        case "item":
          ++contadorPendente;
          quantidadePendentes.innerHTML = contadorPendente;
          break;
        case "item clicado":
          ++contadorConcluido;
          quantidadeConcluido.innerHTML = contadorConcluido;
          document.getElementById("icone_" + data.tarefa).src =
            "progresso-concluido.png";
          break;
        case "item prioridade":
          ++contadorPrioritario;
          quantidadePrioridade.innerHTML = contadorPrioritario;
          break;
      }
    });
  }

  // Se houver informação da cor de fundo, altera para a armazenada
  if (getSavedColor().length != 0) {
    body.style.backgroundColor = getSavedColor();
    titulo.style.backgroundColor = getSavedColor();
  }

  // Se houver informação de titulo salva, altera para a armazenada
  if (getSavedTitle().length != 0) {
    valorTitulo.value = getSavedTitle();
  } else {
    valorTitulo.value = "Lista de tarefas";
  }
})();

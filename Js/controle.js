// Função de clique que adiciona tarefa caso valor do input não seja nulo
function addTarefa() {
  // Se houver algum dado salvo define o contador para valor maximo ou 0
  if (getSavedData().length != 0) {
    // Cria um array com todas as informações de tarefa, contador, recuperando o valor maximo
    let ultimaTarefa = Math.max(
      ...tasks.map((task) => {
        return task.tarefa;
      })
    );
    contador = ultimaTarefa;

    // Caso não haja informações no array tasks, retorna -Infinity, define o contador como 0
    if (ultimaTarefa == "-Infinity") {
      contador = 0;
    }
  }

  // Pega valor do input e caso não sejá nulo acrescenta no main
  valorinput = pegarinput.value;
  if (
    valorinput.trim() != "" &&
    valorinput != null &&
    valorinput != undefined
  ) {
    // Atualiza valor do contador de tarefas pendentes
    ++contador;
    ++contadorPendente;
    quantidadePendentes.innerHTML = contadorPendente;

    // Cria e diciona novo item no main
    let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <img id="icone_${contador}" src="Img/circulo.png" class="imagem-circle">
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
            <p class="valorTarefa">${valorinput}</p>
            </div>
            <div onclick="itemPriridade(${contador})" class="elementoPrioridade">
            <button id="prioridade_${contador}" class="buttonPrioridade"></button>
            <p>Prioridade</p>
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">
                    <img id="icone-lixo_${contador}" src="Img/circule-o-lixo.png" class="imagem-lixo">
                    <p class="itemDeletar">Deletar</p>
            </div>
        </div>`;

    main.innerHTML += novoItem;

    // Cria tarefa em formato de objeto e adiona ao array de tarefas
    let novaTask = {
      tarefa: contador,
      situacao: "item",
      conteudo: valorinput,
      data: Date.now(),
    };
    tasks.push(novaTask);
    setNewData();

    // Caso tenha algum filtro aplicado adiciona o item escondido
    let itens = document.querySelectorAll(".item");
    itens.forEach((item) => {
      let classItem = item.getAttribute("class");
      if (checkConcluidos.checked || checkPrioridades.checked) {
        if (classItem == "item") {
          item.style.display = "none";
        }
      }
    });

    // Zerar o campo do input e adionar foco no input
    pegarinput.value = "";
    pegarinput.focus();
  }
}

// Função de deletar um item em especifico
function deletar(id) {
  let tarefaADD = document.getElementById(id);
  let classe = tarefaADD.getAttribute("class");

  // Procura o index no array pelo valor do contador, id, e remove utilizando o metodo splice
  atualizaSituacao(id, "deletar");

  // cria condicional dependendo da classe atualiza o contador
  switch (classe) {
    case "item":
      tarefaADD.remove();
      --contadorPendente;
      quantidadePendentes.innerHTML = contadorPendente;
      break;
    case "item clicado":
      tarefaADD.remove();
      --contadorConcluido;
      quantidadeConcluido.innerHTML = contadorConcluido;
      break;
    case "item prioridade":
      tarefaADD.remove();
      --contadorPrioritario;
      quantidadePrioridade.innerHTML = contadorPrioritario;
      break;
    default:
      preventDefault;
  }
}

// Adiciona funcionalidade de clique no botão de adicionar pelo enter
pegarinput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btnAdd.click();
  }
});

// Função de marcar tarefa como concluida
function marcarTarefa(id) {
  let item = document.getElementById(id);
  let classe = item.getAttribute("class");

  // Caso algum dos filtros esteja seleciona esconde o item
  if (checkPendente.checked || checkPrioridades.checked) {
    item.style.display = "none";
  }

  // Altera situação do item no array de tasks
  atualizaSituacao(id, "clicado");

  // Adiciona a classe e a formatação para o item clicado e atualiza os contadores
  if (classe == "item") {
    --contadorPendente;
    ++contadorConcluido;
    quantidadePendentes.innerHTML = contadorPendente;
    quantidadeConcluido.innerHTML = contadorConcluido;
    item.classList.add("clicado");
    var icone = (document.getElementById("icone_" + id).src =
      "progresso-concluido.png");
    item.parentElement.appendChild(item);
  } else if (classe == "item prioridade") {
    --contadorPrioritario;
    ++contadorConcluido;
    quantidadeConcluido.innerHTML = contadorConcluido;
    quantidadePrioridade.innerHTML = contadorPrioritario;
    item.classList.remove("prioridade");
    item.classList.add("clicado");
    var icone = (document.getElementById("icone_" + id).src =
      "progresso-concluido.png");
    item.parentElement.appendChild(item);
  } else {
    ++contadorPendente;
    --contadorConcluido;
    quantidadeConcluido.innerHTML = contadorConcluido;
    quantidadePendentes.innerHTML = contadorPendente;
    item.classList.remove("clicado");
    var icone = (document.getElementById("icone_" + id).src = "circulo.png");

    atualizaSituacao(id, "pendente");
  }
}

// Função de marcar tarefa como prioridade
function itemPriridade(id) {
  let item = document.getElementById(id);
  let classe = item.getAttribute("class");

  // Caso um dos contadores esteja marcado esconde o item
  if (checkPendente.checked || checkConcluidos.checked) {
    item.style.display = "none";
  }

  // Altera situação do item no array de tasks
  atualizaSituacao(id, "prioridade");

  // Adciona classe prioridade e atualiza contadores
  if (classe == "item") {
    item.classList.add("prioridade");
    --contadorPendente;
    ++contadorPrioritario;
    quantidadePendentes.innerHTML = contadorPendente;
    quantidadePrioridade.innerHTML = contadorPrioritario;
    item.parentElement.insertBefore(item, item.parentElement.firstChild);
  } else if (classe == "item clicado") {
    --contadorConcluido;
    ++contadorPrioritario;
    quantidadeConcluido.innerHTML = contadorConcluido;
    quantidadePrioridade.innerHTML = contadorPrioritario;
    item.classList.remove("clicado");
    item.classList.add("prioridade");
    document.getElementById("icone_" + id).src = "circulo.png";
    item.parentElement.insertBefore(item, item.parentElement.firstChild);
  } else {
    --contadorPrioritario;
    ++contadorPendente;
    quantidadePendentes.innerHTML = contadorPendente;
    quantidadePrioridade.innerHTML = contadorPrioritario;
    item.classList.remove("prioridade");

    // Atualiza array de tasks caso seja desmarcado
    atualizaSituacao(id, "pendente");
  }
}

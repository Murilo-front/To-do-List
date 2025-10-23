const checkPendente = document.getElementById("checkPendentes");
const checkConcluidos = document.getElementById("checkConcluidos");
const checkPrioridades = document.getElementById("checkPrioridades");

// Adiciona evento de clique no contador de tarefas pendentes
checkPendente.addEventListener("click", (event) => {
  // Seleciona todos os itens e percorre cada um
  let itens = document.querySelectorAll(".item");

  // Só permite a seleção de um filtro por vez
  if (event.target.checked) {
    if (checkConcluidos.checked) {
      checkConcluidos.checked = false;
    }
    if (checkPrioridades.checked) {
      checkPrioridades.checked = false;
    }

    // Esconde cada item ao menos que a classe do mesmo seja igual ao do filtro
    itens.forEach((item) => {
      let classItem = item.getAttribute("class");
      item.style.display = "none";
      if (classItem == "item") {
        item.style.display = "flex";
      }
    });
  } else {
    itens.forEach((item) => {
      item.style.display = "flex";
    });
  }
});

// Adiciona evento de clique no contador de tarefas concluidos
checkConcluidos.addEventListener("click", (event) => {
  // Seleciona todos os itens e percorre cada um
  let itens = document.querySelectorAll(".item");

  // Só permite a seleção de um filtro por vez
  if (event.target.checked) {
    if (checkPendente.checked) {
      checkPendente.checked = false;
    }
    if (checkPrioridades.checked) {
      checkPrioridades.checked = false;
    }

    // Esconde cada item ao menos que a classe do mesmo seja igual ao do filtro
    itens.forEach((item) => {
      let classItem = item.getAttribute("class");
      item.style.display = "none";
      if (classItem == "item clicado") {
        item.style.display = "flex";
      }
    });
  } else {
    itens.forEach((item) => {
      item.style.display = "flex";
    });
  }
});

// Adiciona evento de clique no contador de tarefas prioridades
checkPrioridades.addEventListener("click", (event) => {
  // Seleciona todos os itens e percorre cada um
  let itens = document.querySelectorAll(".item");

  // Só permite a seleção de um filtro por vez
  if (event.target.checked) {
    if (checkConcluidos.checked) {
      checkConcluidos.checked = false;
    }
    if (checkPendente.checked) {
      checkPendente.checked = false;
    }

    // Esconde cada item ao menos que a classe do mesmo seja igual ao do filtro
    itens.forEach((item) => {
      let classItem = item.getAttribute("class");
      item.style.display = "none";
      if (classItem == "item prioridade") {
        item.style.display = "flex";
      }
    });
  } else {
    itens.forEach((item) => {
      item.style.display = "flex";
    });
  }
});

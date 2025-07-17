let contador = 0
let contadorPendente = 0
let contadorPrioritario = 0
let contadorConcluido = 0
let pegarinput = document.getElementById("inputTarefa")
let btnAdd = document.getElementById("btn-add")
let main= document.getElementById("areaLista")
let valorinput
let quantidadePendentes = document.getElementById("valoresPendente")
let quantidadeConcluido = document.getElementById("valoresConcluido")
let quantidadePrioridade = document.getElementById("valoresPrioridade")
function addTarefa() {

    valorinput = pegarinput.value

    if((valorinput != "") && (valorinput != null) && (valorinput != undefined)){
    
        ++contador
        ++contadorPendente
        quantidadePendentes.innerHTML = contadorPendente

        novoItem = `<div id="${contador}" class="item">
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
        </div>`
        //adicionar novo item no main
        main.innerHTML += novoItem
    
        //zerar o campo do input
        pegarinput.value = ""
        pegarinput.focus() 
    } 
}

function deletar(id){
    let tarefaADD = document.getElementById(id)
    let classe = tarefaADD.getAttribute("class")
    switch(classe){
        case "item":
        tarefaADD.remove()
        --contador
        --contadorPendente
        quantidadePendentes.innerHTML = contadorPendente
        break
        case "item clicado":
        tarefaADD.remove()
        --contador
        --contadorConcluido
        quantidadeConcluido.innerHTML = contadorConcluido
        break
        case "item prioridade":
        tarefaADD.remove()
        --contador
        --contadorPrioritario
        quantidadePrioridade.innerHTML = contadorPrioritario
        break
        default: preventDefault
    }
}

pegarinput.addEventListener("keyup", function(event){
    if(event.keyCode === 13){
        event.preventDefault()
        btnAdd.click()
    }
} )


function marcarTarefa(id){
    let item = document.getElementById(id)
    let classe = item.getAttribute("class")
    if (classe == "item" ){
        -- contadorPendente
        ++contadorConcluido
        quantidadePendentes.innerHTML = contadorPendente
        quantidadeConcluido.innerHTML = contadorConcluido
        item.classList.add("clicado")
        var icone = document.getElementById("icone_"+id).src= "progresso-concluido.png"
        item.parentNode.appendChild(item)
    }else if (classe == "item prioridade"){
        --contadorPrioritario
        ++contadorConcluido
        quantidadeConcluido.innerHTML = contadorConcluido
        quantidadePrioridade.innerHTML = contadorPrioritario
        item.classList.remove("prioridade")
        item.classList.add("clicado")
        var icone = document.getElementById("icone_"+id).src= "progresso-concluido.png"
        item.parentNode.appendChild(item)
    }else{
        ++contadorPendente
        --contadorConcluido
        quantidadeConcluido.innerHTML = contadorConcluido
        quantidadePendentes.innerHTML = contadorPendente
         item.classList.remove("clicado")
        var icone = document.getElementById("icone_"+id).src= "circulo.png"     
    }
}

function itemPriridade(id){
    let item = document.getElementById(id)
    let classe = item.getAttribute("class")
    if (classe == "item"){
        item.classList.add("prioridade")
        --contadorPendente
        ++contadorPrioritario
        quantidadePendentes.innerHTML = contadorPendente
        quantidadePrioridade.innerHTML = contadorPrioritario
    } 
    else if (classe == "item clicado"){
        --contadorConcluido
        ++ contadorPrioritario
        quantidadeConcluido.innerHTML = contadorConcluido
        quantidadePrioridade.innerHTML = contadorPrioritario
        item.classList.remove("clicado")
        item.classList.add("prioridade")
        document.getElementById("icone_"+id).src= "circulo.png"    

    }else{
        --contadorPrioritario
        ++contadorPendente
        quantidadePendentes.innerHTML = contadorPendente
        quantidadePrioridade.innerHTML = contadorPrioritario
        item.classList.remove("prioridade")
    }
}

function iconeCamera(){
    console.log ("Ativou a camera")
}


let classe = document.querySelectorAll("item").length
let checkPendente = document.getElementById("checkPendentes")
let checkConcluidos = document.getElementById("checkConcluidos")
let checkPrioridades = document.getElementById("checkPrioridades")
checkPendente.addEventListener("click", function(){
    if(checkPendente.checked){
        console.log(classe)
        
        if(classe>0){
            console.log("certo")
            classe.add("filtroPendente")
        }else{}
        checkPendente.preventDefault
    }else{}
})    

checkConcluidos.addEventListener("click", function(){
    if(checkConcluidos.checked){
        checkConcluidos.preventDefault
    }
})

checkPrioridades.addEventListener("click", function(){
    if(checkPrioridades.checked){
        checkPrioridades.preventDefault
    }
})

function adicionaBorda(){
    let iconeCamera = document.getElementById("iconeCamera")
    let classe = iconeCamera.getAttribute("class")
    iconeCamera.classList.add("adicionaBorda")
}

function retiraBorda(){
    let iconeCamera = document.getElementById("iconeCamera")
    let classe = iconeCamera.getAttribute("class")
    iconeCamera.classList.remove("adicionaBorda")
}

function limparTitulo(){
    let valorTitulo = document.getElementById("Idtitulo")
    valorTitulo.value =""
    valorTitulo.focus()
}

function pegarValor(){
    let valorTitulo = document.getElementById("Idtitulo")
    let pegarValor = valorTitulo.value
    if (pegarValor === ""){
        valorTitulo.value= "Lista de tarefas"
    }
}
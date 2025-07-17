document.getElementById("texto").innerHTML="Meu primeiro texto <b>JS</b>";
console.log("Isso é um console.log"); 

//Declaração de variaveis
var a,b,c;

//Atribuição de valores
a=5;
b=6
c=a+b;
console.log(c);

var a=10;
//alert(a);

var nome, sobrenome, nomeCompleto, idade;
nome="giuliana";
sobrenome="soave";
nomeCompleto=nome+ " " +sobrenome;
idade=20;
soma=idade+10;
pessoa=nome+" "+soma;

//document.getElementById("texto").innerHTML= pessoa;

//let não pode ser redeclaravél
let pessoa1="giuliana";
let pessoa2="murilo";
//alert(pessoa1)

//let x=10 //Aqui é 10
 {
    let x=2 // Aqui é 2
 }

// document.getElementById("texto").innerHTML= x

 //const x=10 //X não deixara de ser 10 
 {
    const x=2 
 }
//document.getElementById("texto").innerHTML= x

//operadores aritimedicos
var valor1, valor2, total; 
valor1=5
valor2=2

//operadores de atribuição
var valor5, valor6, total, Murilo, Giuliana
valor5=Murilo
valor6=Giuliana
//total= ++valor1
//total=--valor1
valor1 += valor2 //=valor1= valor1 + valor2
//alert ('o valor1 ficou: '+ valor1)

var valor1, valor2, total; 
valor1=5
valor2="5"

total = (valor1 == valor2); // valor1 é igual ao valor dois?
//Resposta de true ou false, operadores de comparação
//Mesmo sendo de tipos diferentes vai marcar como true
total = (valor1 === valor2)
//True apenas se eles forem iguais em tipo também
total = (valor1 != valor2)
//True apenas se forem difernetes
total = (valor1 !== valor2)
//Diferente em tipo também
total = (valor1 <= valor2)
//alert (total)

var idade, eleitor, resultado
idade=18
eleitor= (idade<18) ? "Não eleitor":"Sim, eleitor."
//alert('a resposta é: ' + eleitor +' A idade dele é' + idade)
 
idade=65
resultado= (idade > 60 && idade < 70);
resultado= (idade===65 || idade===72)
resultado= !(idade==65)
//Negação
//document.getElementById("texto").innerHTML= resultado

function realParadolar(real, cotaçãoDodolar){
         return real * cotaçãoDodolar
}
//document.getElementById("texto").innerHTML= soma(10,10)
var valorReal= 7.89
var cotação = 5.08
var total = realParadolar(valorReal,cotação)
//alert("O valor em Rs é: "+valorReal+" O valor em dolar é U$ é: "+total)

function alertaHello(){
   alert("Olá pessoal")
}

//alertaHello()

function paraCelsius(valorFahremheit){
   return (5/9)*(valorFahremheit=33)
}

var x = paraCelsius(77)

alert("a tempuratura é de "+x+" graus celius")

const carro = {
   marca:"ford", 
   modelo:"Ka", 
   ano:2015, 
   placa: "ABC-1234",
   buzina: function() {
      alert ('Biiiiiiiiiiiii') 
   },
   completo: function(){
      return "A marca é "+this.marca+" e o modelo é: "+this.modelo
   }
}
console.log (carro.completo())
//console.log(carro["marca"])

carro.buzina()

function eventoclick(){
   document.body.style.backgroundColor = "yellow"
}

function eventoDblclick(){
   alert("evento de click duplo")
}

function viravermelho(){
   let div = document.getElementById("mouseOverOut")
   div.style.backgroundColor = "red"
}

function viraazul(){
   let div = document.getElementById("mouseOverOut")
   div.style.backgroundColor = "blue"
}

function adicionatexto(){
   let p =  document.getElementById("texto")
   p.append('O mouse moveu<br>')
}

function limpatexto(){
   document.getElementById("campoTexto").value= "";
}

function mudou(){
   alert('Mudou')

   let opiçãoValor = document.getElementById("valor").value
   switch (opiçãoValor){
      case "1":
         alert("Opição 1 selecionada")
         break
      case "2":
         alert("Opição 2 selecionada")
         break
      case "3":
         alert("Opição 3 selecionada")
            break
      case "4":
         alert("Opição 4 selecionada")
            break
      default:
      }
   }

function teclaprecionada(){
   let input = document.getElementById("campoTexto").value
   console.log(input)
}

const lista = [
   "arroz", 
   "feijão", 
   "macarrão", 
   "leite"
]
let z = lista[3]
console.log(z)
lista[0]= "Café"
alert (lista[lista.length-1])
lista.push("ovo")
console.log(Array.isArray(lista))
lista.shift()
//Altera os indices da matrix fazendo com que café seja o item 0
lista.unshift("Lindo")
delete lista[2]
//Não muda as posições, porém não é interessante usar
lista.splice(2,0, "Item adicionado1","Item adicionado2") 
const comprador = [
   "Murilo",
   "Giulinha"
]
const junção= lista.concat(comprador)
document.getElementById("lista").innerHTML= junção

const jogadores = [
   "Biro biro",
   "Ribamar",
   "Pelé",
   "Maradona",
   "Bello",
   "Cassio"
]
const craques = jogadores.slice(2,4)
console.log(craques)
const jogadoresOrdem = jogadores.sort()
console.log(jogadoresOrdem)
const jogadoresDesordem = jogadores.sort() 
jogadores.reverse()
console.log(jogadoresDesordem)

const numeros = [40,100,1,5,25,10]
numeros.sort(function(a,b){return a-b})
console.log(numeros)
function maiorNumero(Array){
   return Math.max.apply(null,Array)
}
console.log(maiorNumero(numeros))
function menorNumero(Array){
   return Math.min.apply(null,Array)
}
console.log(menorNumero(numeros))
const maior20 = numeros.filter(filtragem)
console.log(maior20)
function filtragem(value, index, Array){
   return value > 20
}

let hora= new Date().getHours()//Verifica a hora
if (hora<12){
   console.log("Bom dia")
}else if(hora<18){
   console.log("Boa tarde")
}else {
   console.log("Boa tarde")
}

function campoTexto(){
   let nome = document.getElementById("campoTexto").value

   if(nome =="" || nome==null){
      let p =document.getElementById("resposta")
      p.innerHTML="O campo não pode ser vazio"
      p.style.color="red"
   }else{
      let p =document.getElementById("resposta")
      p.innerHTML="Tudo certo"
      p.style.color="green"
   }
}

function campoCor(){
    let cor = document.getElementById("campoCor").value
    cor = cor.toLowerCase()
    switch (cor){
      case "rosa":
         document.body.style.backgroundColor= "pink"
         break
      case "marrom":
         document.body.style.backgroundColor="brown"
         break
      case "roxo":
            document.body.style.backgroundColor= "purple"
            break
      default:
         document.getElementById("resposta").innerHTML="Cor não disponivel"
    }
}
let tempo
let contagem
function ativarContagem(){
   document.getElementById("tempo").innerHTML="Começou a contar"
   tempo = setTimeout(function() {
      document.getElementById("tempo").innerHTML="Executou o setTimeOut"
   }, 5000)
   contagem = setInterval (function(){
      let cronometro = document.getElementById("contagem").innerHTML
      let soma= parseInt(cronometro) + 1
      document.getElementById("contagem").innerHTML= soma
   }, 1000)
}

function pararContagem(){
   clearTimeout(tempo)
   clearInterval(contagem)
   document.getElementById("tempo").innerHTML="Parou a contagem"
}

class Moto {
   constructor(value1, value2, value3){
      this.marca = value1
      this.modelo = value2
      this.ano = value3
   }
}

const spider = new Moto("fiat","spider",2001)
console.log (spider)

let data = new Date()
let ano = data.getFullYear()
let mes = data.getMonth() //De 0 até 11, sendo 0 janeiro

const messesDoAno = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
let mesEscrito = messesDoAno[mes]

let diaMes = data.getDate()//Dia do mes de 1 até 31

let diaSemana = data.getDay()//De 0 até 6
const diasDaSemana = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sabado"]
let diaSemanaEscrito = diasDaSemana[diaSemana]

let Hora = data.getHours()//De 0 até 23
let minutos = data.getMinutes()//De 0 até 59
let segundos = data.getSeconds()//De 0 até 59
let millesegundos = data.getMilliseconds()// De 0 até 999

function addZero(X) {return X < 10 ? '0' + X : '' + X}
let dataPadraoBr = addZero(diaMes) +"/"+ addZero(mes) +"/"+ ano

let dataBR = data.toLocaleDateString('pt-BR')
console.log(Hora+":"+minutos+":"+segundos+" "+diaSemanaEscrito+" "+dataBR)

let hoje = new Date()
let vencimento = new Date(2025, 0, 15)

if(hoje > vencimento) {
   console.log("Sua conta está vencida")
}else{
   console.log("Ainda não venceu")
}

let dataInicial = new Date()
let dataFinal = new Date(2026,11,31)

let diferencaTempo = dataFinal.getTime() - dataInicial.getTime()

let diferencaDias = Math.ceil(diferencaTempo/(24*60*60*1000))

let textoJSON = JSON.stringify(Moto)//Converteu objeto para texto
let objJSON = JSON.parse(textoJSON)//Converteu o texto para objeto

/*No HTML usar comando "pre"
const ajax = new XMLHttpRequest() //"Pedindo para acessar informações do site de forma remota"
ajax.open('GET', '//site')
ajax.send()

ajax.onload = function () {
   document.getElementById().innerHTML = this.responseText
   let objAJAX = JSON.parse(this.responseText)//Permite pegar qualquer parametro dentro deste objeto
}*/


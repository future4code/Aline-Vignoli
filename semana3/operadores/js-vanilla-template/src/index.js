//EXERCICIOS DE INTERPRETACAO DE CODIGO

//Exercicio 1

/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2 //true && false
console.log("a. ", resultado) //retorna como false, pois uma das afirmações é false

resultado = bool1 && bool2 && bool3 //true && false && true
console.log("b. ", resultado) //retorna como false, pois uma das afirmações é false

resultado = !resultado && (bool1 || bool1) // true && ( true || true)
console.log("c. ", resultado) //retorna como true, pois as duas afirmações são verdadeiras

console.log("e. ", typeof resultado) //retorna como boolean
*/

//Exercicio 2

/*
let array
console.log('a. ', array) //retorna undefined

array = null
console.log('b. ', array) //retorna null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) //retorna o tamanho do array, que é 11

let i = 0
console.log('d. ', array[i]) //retorna o índice 0 do array, que é o numero 3

array[i+1] = 19
console.log('e. ', array) //retorna o array com o índice 1 alterado para o numero 19
[19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) //retorna o índice 6 do array, que é o número 8
/*

//EXERCICIOS DE ESCRITA DE CODIGO

//Exercicio 1

/*
//a)
let idadeUsuario = prompt("Qual a sua idade?")

//b)
let idadeMelhorAmiga = prompt("Qual a idade da sua melhor amiga?")

//c)
let idadeUsuarioNumber = Number(idadeUsuario)
let idadeMelhorAmigaNumber = Number(idadeMelhorAmiga)
let resultado = idadeUsuarioNumber > idadeMelhorAmigaNumber
console.log("Sua idade é maior do que a da sua melhor amiga?", resultado)

//d)
const diferenca = idadeUsuarioNumber - idadeMelhorAmigaNumber
console.log(diferenca)
/*

/*
//Exercicio 2

//a)
let numeroPar = prompt("Insira um número par")

//b)
console.log(numeroPar%2)

//c) o resto da divisao de um numero par por 2 é sempre 0

//d) se digitar um numero impar o resto será sempre 1
*/

/*
//Exercicio 3

//a)
const listaDeTarefas = []

//b)
let tarefa1 = prompt("Diga 3 tarefas que você precisa realizar hoje, comece escrevendo a primeira tarefa:")
let tarefa2 = prompt("Qual a segunda tarefa que você precisa realizar hoje?")
let tarefa3 = prompt("Qual a terceira tarefa que você precisa realizar hoje?")

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

//c)
console.log(listaDeTarefas)

//d)
let tarefaRealizada = prompt("Qual o índice da tarefa que você já realizou? (0, 1 ou 2)")
let tarefaRealizadaNumber = Number(tarefaRealizada)

//e)
listaDeTarefas.splice(tarefaRealizadaNumber, 1)

//f)
console.log(listaDeTarefas)
*/

/*
//Exercicio 4

let nomeDoUsuario = prompt("Qual o seu nome?")
let emailDoUsuario = prompt("Qual o seu e-mail?")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`) 
*/

//DESAFIOS EXTRAS

//Desafio 1

/*
//a)
let fahrenheit = 77
let kelvin = (fahrenheit - 32)* 5/9 + 273.15
console.log(kelvin + "K")

//b)
let celsius = 80
fahrenheit = (celsius)* 9/5 + 32
console.log(fahrenheit + "°F")

//C)
celsius = 30
fahrenheit = (celsius)* 9/5 + 32
console.log(fahrenheit + "°F")

kelvin = (fahrenheit - 32)* 5/9 + 273.15
console.log(kelvin + "K")

//d)
celsius = prompt("Insira um valor em graus Celsius para converter:")
fahrenheit = (Number(celsius))* 9/5 + 32
console.log(fahrenheit + "°F")

kelvin = (fahrenheit - 32)* 5/9 + 273.15
console.log(kelvin + "K")
/*

/*
//Desafio 2

//a)
let custoQuilowattHora = 0.05
let consumoQuilowattHora = 280
let valorASerPago = consumoQuilowattHora * custoQuilowattHora

console.log(valorASerPago)

//b)
let desconto = valorASerPago * 0.15
let valorComDesconto = valorASerPago - desconto

console.log(valorComDesconto)
*/

/*
//Desafio 3

//a)
const libraParaQuilograma = 0.45359237
let valorEmLibra = 20
let resultadoConversao = valorEmLibra * libraParaQuilograma

console.log(`${valorEmLibra}lb equivalem a ${resultadoConversao} kg`)

//b)
const oncaParaQuilograma = 	0.028349523
let valorEmOnca = 10.5
resultadoConversao = valorEmOnca * oncaParaQuilograma

console.log(`${valorEmOnca}oz equivalem a ${resultadoConversao} kg`)

//c)
const milhaParaMetro = 1609.344
let valorEmMilha = 100
resultadoConversao = valorEmMilha * milhaParaMetro

console.log(`${valorEmMilha}mi equivalem a ${resultadoConversao} m`)

//d)
const pesParaMetro = 0.3048
let valorEmPes = 50
resultadoConversao = valorEmPes * pesParaMetro

console.log(`${valorEmPes}ft equivalem a ${resultadoConversao} m`)

//e)
const galaoParaLitro = 4.546092
let valorEmGalao = 103.56
resultadoConversao = valorEmGalao * galaoParaLitro

console.log(`${valorEmGalao}gal equivalem a ${resultadoConversao} l`)

//f)
const xicaraParaLitro = 0.24
let valorEmXicara = 450
resultadoConversao = valorEmXicara * xicaraParaLitro

console.log(`${valorEmXicara} xic equivalem a ${resultadoConversao} l`)

//g)
valorEmLibra = prompt("Digite um valor em libras para converter para quilograma:")
resultadoConversao = valorEmLibra * libraParaQuilograma

console.log(`${valorEmLibra}lb equivalem a ${resultadoConversao} kg`)


valorEmPes = prompt("Digite um valor em pés para converter para metros:")
resultadoConversao = valorEmPes * pesParaMetro

console.log(`${valorEmPes}ft equivalem a ${resultadoConversao} m`)

valorEmXicara = prompt("Digite um valor em xícara para converter para litros:")
resultadoConversao = valorEmXicara * xicaraParaLitro

console.log(`${valorEmXicara} xic equivalem a ${resultadoConversao} l`)
*/
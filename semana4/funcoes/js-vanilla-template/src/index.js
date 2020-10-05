//EXERCICIOS DE INTERPRETACAO DE CÓDIGO
//EXERCICIO 1
//a.
/*será impresso o valor da variavel que foi passada como parâmentro multiplicado por 5. 
Nesse caso, o numero 10, e na linha de baixo o numero 50. */
//b.
//Restirando o console.log nada aparecerá no console

//EXERCICIO 2
//a.
//As saídas seriam:
//Darvas
//Caio

//b.
//Seria impresso:
//Amanda
//Caio

//EXERCICIO 3
/*Essa funcao recebe como argumento um array de numeros, itera o array recebido e adiciona no array final apenas os numeros pares desse array, multiplicados por eles mesmos (no caso elevados ao quadrado) e retorna um arrayFinal com esses numeros.
Essa funcao poderia se chamar filtarNumerosParesAoQuadrado
*/

//EXERCICIOS DE ESCRITA DE CÓDIGO
//a.
// function imprimirMinhaBio(){
//     console.log(`Eu sou Aline, tenho 32 anos, moro em Florianópolis e sou estudante`)
// }

//b.
// function imprimirMinhaBio(nome, idade, cidade, souEstudante ){
//     let estudanteOuNao
//     if ( souEstudante ){
//         estudanteOuNao = "sou"
//     }else {
//         estudanteOuNao = "não sou"
//     }

//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e ${estudanteOuNao} estudante`)
// }

// const minhaBio = imprimirMinhaBio("Ge", 37, "Floripa", false )

//EXERCICIO 5
//a.
// let somaDoisNumeros = (a, b) => {
//     return a + b
// }

// const resultado = somaDoisNumeros(100, 30)
// console.log(resultado)

//b.
// let maiorOuIgual = (a, b) => {
//     if ( a >= b ){
//         return true
//     }else {
//         return false
//     }
// }

// const resultado = maiorOuIgual(20, 200)
// console.log(resultado)

//c.
// let imprimeMensagemDezVezes = (mensagem) => {
//     for ( i = 0; i < 10; i++ ){
//         console.log(mensagem)
//     }
// }

// imprimeMensagemDezVezes("minha mensagem")

//EXERCICIO 6
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

//a.
// let contarItemsDoArray = (array) => {
//     return array.length
// }

// let tamanhoDoArray = contarItemsDoArray(array)
// console.log(tamanhoDoArray)

//b.
// let checarParidade = (numero) => {
//     if ( numero%2 === 0 ){
//         return true
//     }else if ( numero%2 === 1 ){
//         return false
//     }else {
//         return "Não é um número"
//     }
// }

// let verificaParidade = checarParidade(10)
// console.log(verificaParidade)

//c.
// let contarNumerosPares = (array) => {
//     let arrayNumerosPares = []
//     for (let numero of array){
//         if (numero%2 === 0){
//             arrayNumerosPares.push(numero)
//         }
//     }
//     return arrayNumerosPares.length
// }

// let quantidadeNumerosPares = contarNumerosPares(array)
// console.log(quantidadeNumerosPares)

//d.
// let contarNumerosPares2 = (array) => {
//     let arrayNumerosPares = []
//     for (let numero of array){
//         if (checarParidade(numero)){
//             arrayNumerosPares.push(numero)
//         }
//     }
//     return arrayNumerosPares.length
// }

// let quantidadeNumerosPares2 = contarNumerosPares2(array)
// console.log(quantidadeNumerosPares2)

//DESAFIOS
//EXERCICIO 1
//1.
// let imprimeNoConsole = (parametro) => {
//     console.log(parametro)
// }

// imprimeNoConsole("Olá, eu sou um parâmetro numa arrow function!")

// //2.
// let somarNumeros = (a, b) => {
//     let soma = a + b
//     imprimeNoConsole( soma )
// }

// somarNumeros(20, 3)

//EXERCICIO 2
//a.
// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// let numerosParesVezesDois = (array) => {
//     let arrayDeParesVezesDois = []
//     for ( let numero of array ){
//         if ( numero%2 === 0 ){
//             arrayDeParesVezesDois.push(numero * 2)
//         }
//     }
//     return arrayDeParesVezesDois
// }

// const resultado = numerosParesVezesDois(numeros)
// console.log(resultado)

//b.
// let checarMaiorNumeroDoArray = (array) => {
//     let maiorNumero = 0
//     for ( let numero of array ){
//         if ( maiorNumero < numero){
//             maiorNumero = numero
//         }
//     }
//     return maiorNumero
// }

// const maiorNumeroDoArray = checarMaiorNumeroDoArray(numeros)
// console.log(maiorNumeroDoArray)

//c.
// let checarIndiceMaiorNumeroArray = (array) => {
//     let maiorNumero = 0
//     let index = 0
//     for ( let i = 0; i < array.length ; i++ ){
//         if ( maiorNumero < array[i] ){
//             maiorNumero = array[i]
//             index = i 
//         }
//     }
//     return index
// }

// const indiceMaiorNumero = checarIndiceMaiorNumeroArray(numeros)
// console.log(indiceMaiorNumero)

// //d.
// let inverterArray = (array) => {
//     let arrayInvertido = []
//     for ( let i = array.length; i >= 0 ; i-- ){
//         arrayInvertido.push(array[i])
//     }
//     return arrayInvertido
// }

// const arrayInvertido = inverterArray(numeros)
// console.log(arrayInvertido)
//EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO


//EXERCICIO 1

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//O codigo acima está incrementando +1 na let i cada vez que o codigo entra no loop, enquanto ela for menor do que 5. 
//E também está alterando a variavel valor para que ela seja a soma do próprio valor com o i. 
//Incrementando também o valor a cada volta do loop. O resultado impresso no console será 10.
/*

PASSO A PASSO:
primeira rodada
valor = 0
i = 1

segunda rodada
valor = 1
i = 2

terceira rodada
valor = 1 + 2
i = 3

quarta rodada
valor = 3 + 3
i = 4

valor = 6 + 4
aqui saímos do loop pois 5 não é menor do que 5, e o resultado final impresso será 10

*/

//EXERCICIO 2
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) serão impresso no console todos os numeros que forem maior do que 18

//b)
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// let i = 0

// for (let numero of lista) {
//     console.log("Index: ", i)
//     console.log(numero)
//     i++
// }
// Sim. Para acessar cada índice da lista podemos criar uma variável i e incrementa-la dentro do for, assim toda a vez que o código roda teremos um indice e o seu elemento correspondente.

//No exemplo baixo estou printando os indices apenas dos numeros maiores que 18
// for (let numero of lista ){
//     if (numero > 18){
//         console.log("Index: ", i)
//         console.log(numero)  
//     }
//     i++
// }

//DESAFIO 1
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

//Será impresso no console 4 vezes a linha "0", cada vez adicionando mais um 0 à direita

//-------------------------------------------------

//EXERCICIOS DE ESCRITA DE CODIGO
//EXERCICIO 3

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// //a)
// for ( let numero of arrayOriginal ){
//     console.log(numero)
// }

// //b)
// for ( let numero of arrayOriginal ){
//     console.log(numero/10)
// }

//c)
// const arrayNumerosPares = []

// for ( let numero of arrayOriginal ){
//     if ( numero%2 === 0){
//         arrayNumerosPares.push(numero)
//     }
// }

// console.log(arrayNumerosPares)

//d)
// const arrayStrings = []
// let i = 0
// let frase = ""

// for(let numero of arrayOriginal ){
//     frase = "O elemento do índex "+ i + " é " + numero
//     arrayStrings.push(frase)
//     i++
// }

// console.log(arrayStrings)

//e)
// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let valorMaximo = Infinity
// let valorMinimo = arrayOriginal[0]

// for ( let i = 0; i < arrayOriginal.length; i++){
//     let elemento = arrayOriginal[i]

//     if ( valorMaximo < elemento ){
//         valorMaximo = elemento
//     }else if ( valorMinimo > elemento){
//         valorMinimo = elemento
//     }
// }

// console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

//DESAFIO 2

// let numeroPensado = Number(prompt("Escolha um número!"))
// console.log("Vamos jogar!")

// let numeroChutado = Number(prompt("Advinhe qual é o número"))
// console.log("O numero chutado foi: "+ numeroChutado)
// let tentativas = 1

// while ( numeroChutado !== numeroPensado ){
    
//     if ( numeroChutado < numeroPensado ){
//         console.log("Você errou, o número é maior do que esse!")
//     }else if ( numeroChutado > numeroPensado ){
//         console.log("Você errou, tente um número menor!")
//     }

//     tentativas++
//     numeroChutado = Number(prompt("Advinhe qual é o número"))
//     console.log("O numero chutado foi: "+ numeroChutado)
// }

// console.log("Acertou com "+ tentativas + " tentativas!")

//DESAFIO 3

// let numeroPensado = Math.floor(Math.random()*100)

// let numeroChutado = Number(prompt("Advinhe qual é o número"))
// console.log("O numero chutado foi: "+ numeroChutado)
// let tentativas = 1

// while ( numeroChutado !== numeroPensado ){
    
//     if ( numeroChutado < numeroPensado ){
//         console.log("Você errou, o número é maior do que esse!")
//     }else if ( numeroChutado > numeroPensado ){
//         console.log("Você errou, tente um número menor!")
//     }

//     tentativas++
//     numeroChutado = Number(prompt("Advinhe qual é o número"))
//     console.log("O numero chutado foi: "+ numeroChutado)
// }

// console.log("Acertou com "+ tentativas + " tentativas!")

//A alteração foi fácil pois eu apenas precisei alterar a variavel numeroPensado para gerar um número aleatório.
//EXERCICIOS DE INTERPRETACAO DE CODIGO

//Exercicio 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// O programa acima testa se o resto da divisao do numero digitado pelo usuario dividido por dois é igual a zero. Se sim, podemos constatar que o número é par, se não, o número é ímpar.
// Para números pares, ele imprime no console "Passou no teste"
// Para números ímpares, ele imprime "Não passou no teste"

//Exercicios 2
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a)  O código acima serve para dizer o preço baseado na fruta que o usuario escolhar

// b)  Será impresso: "O preço da fruta Maçã é R$ 2.25"

// c)  Caso retirássemos o break, a variavel preco iria receber o valor 5 e assim a mensagem impressa seria: "O preço da fruta Pêra é R$ 5"

// //Exercicio 3
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
 
// a)  A primeira linha está convertendo o que o usuario digitou em uma variavel do tipo Number

// b)  Se o usuario digitar o numero 10, imprime: "Esse número passou no teste". Se o usuario digitar -10, haverá um erro no console.

// c) Haverá um erro no console, pois a variavel mensagem está declarada dentro do bloco if, fora do escopo global. Por tanto ela não poderá ser acessada fora do escopo. No caso da condição numero > 0 retornar como false, não podemos chamar a variavel mensagem no console, pois ela só foi declarada dentro do bloco if

//EXERCICIOS DE ESCRITA DE CODIGO

//Exercicio 4
// const idade = Number(prompt("Qual é a sua idade?"))

// if ( idade >= 18){
//     console.log("Você pode dirigir")
// }else {
//     console.log("Você não pode dirigir")
// }

//Exercicio 5
// const turnoAluno = prompt("Qual turno do dia você estuda? Digite M (para matutino), V (para vespertino) ou N (para nortuno)").toLowerCase()

// if ( turnoAluno === "m"){
//     console.log("Bom Dia!")
// }else if ( turnoAluno === "v" ){
//     console.log("Boa Tarde!")
// }else if ( turnoAluno === "n"){
//     console.log("Boa Noite!")
// }else {
//     console.log("Turno inválido")
// }

//Exercicio 6
// const turnoAluno = prompt("Qual turno do dia você estuda? Digite M (para matutino), V (para vespertino) ou N (para nortuno)").toLowerCase()

// switch ( turnoAluno ){
//     case "m":
//         console.log("Bom Dia!")
//         break;
//     case "v":
//         console.log("Boa Tarde!")
//         break;    
//     case "n":
//         console.log("Boa Noite!")
//         break;
//     default :
//         console.log("Turno inválido")
//         break;        
// }

//Exercicio 7
// const generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
// const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

// if ( generoFilme === "fantasia" && precoIngresso < 15 ){
//     console.log("Bom filme!")
// }else {
//     console.log("Escolha outra filme :(")
// }

//DESAFIOS

//Desafio 1
// const generoFilme = prompt("Qual o gênero do filme?").toLowerCase()
// const precoIngresso = Number(prompt("Qual o preço do ingresso?"))


// if ( generoFilme === "fantasia" && precoIngresso < 15 ){
//     let snack = prompt("Qual snack que você quer comprar?")
//     console.log("Bom filme!")
//     console.log("...com", snack)
// }else {
//     console.log("Escolha outra filme :(")
// }

//Desafio 2
const nomeCompleto = prompt("Digite seu nome completo:")
let tipoDeJogo = prompt("Qual o tipo de jogo? Digite IN (para internacional) ou DO (para doméstico):").toLowerCase()
let etapaDoJogo = prompt("Qual a etapa do jogo? Digit SF (para semi-final), DT (para decisao de terceiro lugar) ou FI (para final):").toLowerCase()
let categoria = Number(prompt("Escolha uma categoria: 1, 2, 3 ou 4:"))
const quantidadeDeIngressos = Number(prompt("Informe a quantidade de ingressos que você quer comprar:"))
let valorDoIngresso
let valorTotal
let moeda = "R$ "

if ( etapaDoJogo === "sf" ){
    etapaDoJogo = "Semi-final"
    switch ( categoria ){
        case 1 :
            valorDoIngresso = 1320
            break;
        case 2 :
            valorDoIngresso = 880
            break;
        case 3 :
            valorDoIngresso = 550
            break;
        case 4 :
            valorDoIngresso = 220
            break;
        default:
            console.log("Categoria inválida")
            break;                    
    }
}else if( etapaDoJogo === "dt"){
    etapaDoJogo = "Decisão do 3º lugar"
    switch ( categoria ){
        case 1 :
            valorDoIngresso = 660
            break;
        case 2 :
            valorDoIngresso = 440
            break;
        case 3 :
            valorDoIngresso = 330
            break;
        case 4 :
            valorDoIngresso = 170
            break;
        default:
            console.log("Categoria inválida")
            break;                    
    }
}else if( etapaDoJogo === "fi"){
    etapaDoJogo = "Final"
    switch ( categoria ){
        case 1 :
            valorDoIngresso = 1980
            break;
        case 2 :
            valorDoIngresso = 1320
            break;
        case 3 :
            valorDoIngresso = 880
            break;
        case 4 :
            valorDoIngresso = 330
            break;
        default:
            console.log("Categoria inválida")
            break;
    }       
}else {
    etapaDoJogo = "Inválida"
}

if ( tipoDeJogo === "do"){
    tipoDeJogo = "Nacional"
}else if ( tipoDeJogo === "in"){
    tipoDeJogo = "Internacional"
    moeda = "U$ "
    valorDoIngresso *= 4.1
}else {
    tipoDeJogo = "Inválido"
}

valorTotal = valorDoIngresso * quantidadeDeIngressos

console.log("---Dados da compra---")
console.log(`Nome do cliente: ${nomeCompleto}`)
console.log(`Tipo do jogo: ${tipoDeJogo}`)
console.log(`Etapa do jogo: ${etapaDoJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de Ingressos: ${quantidadeDeIngressos} ingressos`)
console.log("---Valores---")
console.log(`Valor do ingresso: ${moeda}${valorDoIngresso}`)
console.log(`Valor total: ${moeda}${valorTotal}`)
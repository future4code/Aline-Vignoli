//EXERCICIOS DE INTERPRETACAO DE CODIGO
//Exercicio 1
/*
a = 10
b = 10

console.log(b) //irá imprimir o numero 10

b = 5
console.log(a, b) //irá imprimir o numero 10 e o numero 5, pois alteramos o valor de b

//Exercicio 2
a = 10
b = 20
c = a  10
b = c  10
a = b  10

console.log(a, b, c) //irá imprimir o numero 10 10 e 10 */

//EXERCICIOS DE ESCRITA DE CODIGO

//Exercicio 1
//a)
let nome

//b
let idade

//c)
console.log(typeof nome) 
console.log(typeof idade)

//d)
//Foi impresso o tipo undefined pois não foi atribuido nenhum valor às variáveis

//d)
/*let nome = prompt("Qual é o seu nome?")
let idade = prompt("Qual é a sua idade?")*/
//Primeiro recebi um erro pois declarei as variaveis novamente ao invés de apenas atribuir os valores

//e)
nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")

console.log(typeof nome) 
console.log(typeof idade)
//Dessa vez o typeof retornou como o tipo string

//f)
console.log(`Olá ${nome}, você tem ${idade} anos`)

//Exercicio 2
nome = prompt("Qual o seu nome?") //aqui eu atribuí um novo valor pra variável nome que já tinha sido declarada acima
let signo = prompt("Qual o seu signo?")
let bandaFavorita = prompt("Qual a sua banda favorita?")
let comidaFavorita = prompt("Qual a sua comida favorita?")
let seriadoFavorito = prompt("Qual o seu seriado de TV favorito?")

console.log(`1. Qual o seu nome? Resposta: ${nome}`)
console.log(`2. Qual o seu signo? Resposta: ${signo}`)
console.log(`3. Qual a sua banda favorita? Resposta: ${bandaFavorita}`)
console.log(`4. Qual a sua comida favorita? Resposta: ${comidaFavorita}`)
console.log(`1. Qual o seu seriado de TV favorito? Resposta: ${seriadoFavorito}`)

//Exercicio 3
let minhasComidasFavoritas = ["lasanha", "batata recheada", "sushi", "cogumelos", "falafel"]

//a)
console.log(minhasComidasFavoritas)

//b)
console.log(`Essas são as minhas comidas preferidas: 
${minhasComidasFavoritas[0]}
${minhasComidasFavoritas[1]}
${minhasComidasFavoritas[2]}
${minhasComidasFavoritas[3]}
${minhasComidasFavoritas[4]}`)

//c)
let comidaFavoritaUsuario = prompt("Qual a sua comida favorita?")
minhasComidasFavoritas[1] = comidaFavoritaUsuario

console.log(`Essas são as minhas comidas preferidas: 
${minhasComidasFavoritas[0]}
${minhasComidasFavoritas[1]}
${minhasComidasFavoritas[2]}
${minhasComidasFavoritas[3]}
${minhasComidasFavoritas[4]}`)

//Exercicio 4
let perguntas = ["Você estuda na Labenu?", "Você gosta de praia?", "Você tem filhas(os)?"]

//a)
let respostas = [true, true, false]

//b)
console.log(perguntas[0], respostas[0])
console.log(perguntas[1], respostas[1])
console.log(perguntas[2], respostas[2])
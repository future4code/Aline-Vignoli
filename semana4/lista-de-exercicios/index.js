// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO

// 1.
/*
A função conversorDeMoeda serve para converter um valor em dólar para reais.
Ela recebe um valor em dólar como parâmetro, e através de um prompt pede para o usuário informar o valor da cotação do dólar. Em seguida ele retorna uma string "R$" concatenada com um number, que é o valor em dólar (que é passado como parâmetro) multiplicado pela cotação (informada no prompt).
Fora da função, logo abaixo é declarada uma variável meuDinheiro que vai guardar o retorno dessa função, passando o valor 100 para o parâmetro valorEmDolar. 
Mais abaixo, o console irá imprimir a variável meuDinheiro, que vai ser igual à 100 multiplicado pelo número que o usuário digitar no prompt, como o R$ na frente.
*/

// 2.
/* 
A função investeDinheiro serve para calcular o valor que determinada quantia de dinheiro investida renderia. 
Ela recebe dois parâmetros: O primeiro é o tipo de investimento (pode ser Poupança, Renda Fixa, CDB ou Ações), e o segundo parâmetro é o valor do investimento.
Dentro dessa função é declarada a variável valorAposInvestimento, inicialmente undefined.
Logo abaixo nós temos a estrutura switch case que testa o tipo de investimento (recebido como primeiro parâmetro).
Se o tipo de investimento for Poupança, o valorAposInvestimento será igual ao valor do investimento (recebido como segundo parâmetro) multiplicado por 1.03
Se o tipo de investimento for Renda Fixa, o valorAposInvestimento será igual ao valor do investimento multiplicado por 1.05
Se o tipo de investimento for CDB, o valorAposInvestimento será igual ao valor do investimento multiplicado por 1.06
Se o tipo de investimento for Ações, o valorAposInvestimento será igual ao valor do investimento multiplicado por 1.1
E por fim, se o tipo de investimento não for igual à nenhum dos mencionados acima, irá exibir um alerta para o usuário com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
Na última linha da função, é retornado o valorAposInvestimento, que terá recebido o valor de acordo com a condição satisfeita no switch.
Fora da função foram criadas duas variáveis para armazenar o valor após investimento.
A variável novoMontante recebe o retorno da função investeDinheiro passando como tipo de investimento "Ações", e como valor de investimento 150.
A variável segundoMontante recebe o retorno da função investeDinheiro passando como tipo de investimento "Tesouro Direto", e como valor de investimento 200.
No fim do código o primeiro console.log irá imprimir o valor 165.
Já o segundo console.log irá imprimir undefined e o programa vai exibir um alert "TIPO DE INVESTIMENTO INFORMADO INCORRETO!" para o usuário, pois o tipo "Tesouro Direto" não corresponde à nenhuma das opções do switch.
*/

//3
/*
Primeiro é declarado um array chamado numeros, que contém números diversos.
Abaixo são criados dois arrays vazios (arra1 e array2).
Em seguinda nós temos um 'for' que percorre cada elemento do array principal (numeros), e verifica:
Se o resto da divisão dessa elemento por dois for igual a zero, quer dizer que o número é par. Nesse caso, esse número será adicionado ao array1, atravéz da função 'push'.
Se não, quer dizer que o número é ímpar, e nesse caso será adicionado ao array2, atravéz do 'push'.
No primeiro console.log será impresso a quantidade de elementos no array numeros, dessa forma: "Quantidade total de números 14"
No segundo console.log será impresso a quantidade de elementos no array1(números pares), que será 6.
No terceiro console.log será impresso a quantidade de elementos no array2(números ímpares), que será 8.
*/

//4
/*
Primeiro é declarado um array chamado numeros, que contém números diversos.
Em seguida é criada uma variável let chamada numero1, que recebe inicialmente o valor infinito.
E abaixo dela, uma variável let chamada numero2, que recebe inicialmente zero.
Depois disso nós temos um 'for' que itera o array numeros,e testa um elemento de cada vez:
Se o primeiro elemento do array for menor do que o numero1(que é infinito), o numero1 vai agora receber o valor desse elemento.
Ainda dentro do 'for' tem uma estrutura que vai testar se o elemento do array for maior do que numero2 (que é 0), o numero2 vai receber o valor desse elemento.
Assim ele vai pegar todos os elementos do array, um por um, e fazer essas comparações, atualizando o numero1 para ser o menor número até o momento, e o numero2 para ser o maior número até o momento.
Com essa estrutura nós vamos poder saber qual é o maior número do array numeros, e qual é o menor número do array numeros.
No console irá imprimir primeiro o menor número, que é -10
E em seguida, o maior número, 1590.
*/

// EXERCICIOS DE LÓGICA DE PROGRAMAÇÃO
//1.
// const numbers = [0, 1, 2, 3, 4, 5, 6, 7]

// PRIMEIRA MANEIRA - WHILE
// const iterarArray = (array)=>{
//     let i = 0
//     while (i < array.length){
//         console.log(array[i])
//         i++
//     }
// }

// CHAMADA DA FUNÇÃO
// iterarArray(numbers)

// SEGUNDA MANEIRA - FOR
// const iterarArray = (array)=>{
//     for (let i = 0; i < array.length; i++ ){
//         console.log(array[i])
//     }
// }

// iterarArray(numbers)

// TERCEIRA MANEIRA - FOR OF
// const iterarArray = (array)=>{
//     for (let element of array){
//         console.log(element)
//     }
// }

// iterarArray(numbers)


//2.
/*
booleano1 = true
booleano2 = false
booleano3 = true
booleano4 = false
*/
//a) true && false && true -> resultado = false
//b) false || true -> resultado = false
//c) true && true -> resultado = true
//d) true || false -> resultado = true
//e) false || true -> resultado = true

// 3.
/*
O código não funciona primeiro porque a variável quantidadeDeNumerosPares não foi inicializada.
O código gera um loop infinito pois a variável i não está sendo incrementada no fim do while, por tanto a condição de continuidade nunca deixa de ser verdadeira.
Feito essas correções, o código estava imprimindo 1 número a mais do que deveria, pois a condição de continuidade estava testando menor OU igual, ao invéz de testar apenas enquanto for menor. 
Abaixo estão as correções:
*/

// const quantidadeDeNumerosPares = Number(prompt('Digite um número:'))
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }

// 4.
// const classificaTriangulo = (a, b, c) =>{
//     let equilatero = a === b && a === c
//     let isosceles = a === b || a === c || b === c
//     let mensagem = ""

//     if ( equilatero ){
//         mensagem = 'Equilátero'
//     }else if ( isosceles ){
//         mensagem = 'Isósceles'
//     }else {
//         mensagem = 'Escaleno'
//     }
//     return mensagem
// }

// const resultado = classificaTriangulo(10,10,10)
// console.log(`Este é um triângulo ${resultado}`)

// 5.
// const numero1 = Number(prompt('Digite um número:'))
// const numero2 = Number(prompt('Digite outro número:'))

// const verificaMaiorNumero = (a, b)=> {
//     if ( a > b ){
//         console.log('O maior é:', a)
//         console.log(b + ' não é divisível por ' + a)
//         console.log(a + ' é divisível por ' + b)
//         console.log('A diferença entre eles é', a - b)
//     }else if ( b > a ){
//         console.log('O maior é:', b)
//         console.log(a + ' não é divisível por ' + b)
//         console.log(b + ' é divisível por ' + a)
//         console.log('A diferença entre eles é', b - a)
//     }else {
//         alert('Os dois números são iguais!')
//     }
// }

// verificaMaiorNumero(numero1, numero2)

// EXERCICIOS DE FUNÇÕES
// 1.
// const numeros = [20, 30, 5, 241, 2, 700, 54, 61]

// const segundoMaiorSegundoMenor = (array)=> {

// }

// 2. 
// const meuAlerta = ()=>{
//     window.alert("Hello Future4")
// }

// meuAlerta()

// EXERCICIOS DE OBJETOS
// 1. 

// 2.
// const criarRetangulo = (lado1, lado2)=>{
//     const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2 * (lado1 + lado2),
//         area: lado1 * lado2
//     }
//     return retangulo
// }

// 3. 
// const filme = {
//     titulo: '"Garota,Interrompida"',
//     ano: 2000,
//     diretor: 'James Mangold',
//     elenco: ['Winona Ryder', 'Angelina Jolie', 'Clea DuVall', 'Brittany Murphy']
// }

// let mensagem = `Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.elenco}`

// console.log(mensagem)

// 4.
// const pessoa = {
//     nome: 'Germana',
//     idade: 37,
//     email: 'emaildage@gmail.com',
//     endereco: 'Rua das Gaivotas, 420'
// }

// let novaPessoa = {
//     ... pessoa,
//     nome: "Anonimo"
// }

// console.log(novaPessoa.nome)

// EXERCICIOS DE FUNÇÕES DE ARRAY
// 1.
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const adultos = pessoas.filter((pessoa)=>{
//     if ( pessoa.idade >= 20){
//         return pessoa
//     }
// })

// const criancasEAdolescentes = pessoas.filter((pessoa)=>{
//     if ( pessoa.idade < 20){
//         return pessoa
//     }
// })

// console.log(adultos)

// 2.
// const array = [1, 2, 3, 4, 5, 6]

//a)
// const numerosVezesDois = (array)=>{
//     let novoArray = []
//     array.forEach((numero)=>{
//         novoArray.push(numero*2)
//     })
//     return novoArray
// }

// const novoArray = numerosVezesDois(array)
// console.log(novoArray)

//b)
// const numerosVezesTresEmString = (array)=>{
//     let novoArray = []
//     array.forEach((numero)=>{
//         let numeroString = numero*3
//         novoArray.push(numeroString.toString())
//     })
//     return novoArray
// }

// const novoArray = numerosVezesTresEmString(array)
// console.log(novoArray)

//c)
// const arrayStringsParImpar = (array)=>{
//     let novoArray = []
//     array.forEach((numero)=>{
//         if ( numero%2 === 0){
//             novoArray.push(`${numero} é par`)
//         }else{
//             novoArray.push(`${numero} é ímpar`)
//         }
//     })
//     return novoArray
// }

// const novoArray = arrayStringsParImpar(array)
// console.log(novoArray)

// 3.
// a)
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const pessoasComPermissao = pessoas.filter((pessoa)=>{
//     let alturaMinima = pessoa.altura >= 1.5
//     let faixaEtaria = pessoa.idade >= 14 && pessoa.idade <= 60 
//     if ( alturaMinima && faixaEtaria ){
//         return true
//     }
//     return false
// })

// console.log(pessoasComPermissao)

// b)
// const pessoasSemPermissao = pessoas.filter((pessoa)=>{
//     let alturaMinima = pessoa.altura >= 1.5
//     let faixaEtaria = pessoa.idade >= 14 && pessoa.idade <= 60 
//     if ( !alturaMinima || !faixaEtaria ){
//         return true
//     }
//     return false
// })

// console.log(pessoasSemPermissao)

// 4.
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

// const emailsNaoCanceladas = []
// const emailsCanceladas = []

// const gerarEmailsConsultas = (array)=>{
// 	array.forEach((consulta)=>{
// 		let textoEmail = ""
// 		let genero = ""
// 		let lembrete = ""
	
// 		if ( consulta.genero === "feminino"){
// 			genero = "Sra."
// 			lembrete = "lembrá-la"
// 		}else {
// 			genero = "Sr."
// 			lembrete = "lembrá-lo"
// 		}
	
// 		if ( consulta.cancelada === false ){
// 			textoEmail = `Olá, ${genero} ${consulta.nome}. Estamos enviando esta mensagem para ${lembrete} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento desse e-mail.` 
// 			emailsNaoCanceladas.push(textoEmail)
// 		}else {
// 			textoEmail = `Olá, ${genero} ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la.` 
// 			emailsCanceladas.push(textoEmail)
// 		}
// 	})
// }

// gerarEmailsConsultas(consultas)
// console.log(emailsNaoCanceladas)
// console.log(emailsCanceladas)

// 5.
// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// const atualizarSaldoTotal = (array)=>{
// 	array.forEach((conta)=>{
// 		let soma = 0
// 		conta.compras.forEach((compra)=>{
// 			soma += compra
// 		})

// 		conta.saldoTotal -= soma
// 	})
// }

// atualizarSaldoTotal(contas)
// console.log(contas)
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

const quantidadeDeNumerosPares = Number(prompt('Digite um número:'))
let i = 0
while(i < quantidadeDeNumerosPares) {
  console.log(i*2)
  i++
}
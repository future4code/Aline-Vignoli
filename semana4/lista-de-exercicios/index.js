// EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO (o que faz, como faz, o que é impresso)

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
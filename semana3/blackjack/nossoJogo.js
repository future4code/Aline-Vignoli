/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem vind@ ao jogo Blackjack!")

let pontuacaoUsuario
let pontuacaoComputador

if ( confirm("Quer iniciar uma nova rodada?") ){
   const primeiraCartaUsuario = comprarCarta()
   const segundaCartaUsuario = comprarCarta()
   const primeiraCartaComputador = comprarCarta()
   const segundaCartaComputador = comprarCarta() 

   pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
   pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

   console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação: ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação: ${pontuacaoComputador}`)
   
   if ( pontuacaoUsuario > pontuacaoComputador ){
      console.log("O usuário ganhou!")
   }else if( pontuacaoUsuario < pontuacaoComputador ){
      console.log("O computador ganhou!")
   }else {
      console.log("Empate!")
   }
}else {
   console.log("O jogo acabou!")
}
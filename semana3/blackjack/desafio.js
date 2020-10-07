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
   let primeiraCartaUsuario = comprarCarta()
   let segundaCartaUsuario = comprarCarta()
   let primeiraCartaComputador = comprarCarta()
   let segundaCartaComputador = comprarCarta() 

   if ( primeiraCartaUsuario.valor === 11 && segundaCartaUsuario.valor === 11 ){
      console.log("Você tirou dois A's, vamos dar as cartas novamente!")
      primeiraCartaUsuario = comprarCarta()
      segundaCartaUsuario = comprarCarta()
   }else if ( primeiraCartaComputador.valor === 11 && segundaCartaComputador.valor === 11 ){
      console.log("O computador tirou dois A's, vamos dar as cartas novamente!")
      primeiraCartaComputador = comprarCarta()
      segundaCartaComputador = comprarCarta()
   }else{
      pontuacaoUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor
      pontuacaoComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor

      if (confirm ( `Suas cartas são ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto}. A carta revelada do computador é ${primeiraCartaComputador.texto}. Deseja comprar mais uma carta?`)){

         let cartaNova = comprarCarta()
         let cartasCompradasTexto = [cartaNova.texto]
         let cartasCompradas = [cartaNova]
   
         while ( pontuacaoUsuario < 21 && confirm( `Suas cartas são ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} ${cartasCompradasTexto}. A carta revelada do computador é ${primeiraCartaComputador.texto}. Deseja comprar mais uma carta?`) ) {

            cartaNova = comprarCarta()
            cartasCompradasTexto.push(cartaNova.texto)
            cartasCompradas.push(cartaNova)
            for ( let cartaComprada of cartasCompradas){
                  pontuacaoUsuario += cartaComprada.valor
            }
         }

         if ( pontuacaoUsuario > 21 ){
            alert(`Suas cartas são ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} ${cartasCompradasTexto} . Sua pontuação é ${pontuacaoUsuario}. As cartas do computador são ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto}. A pontuação do computador é ${pontuacaoComputador}. O computador ganhou!`)
         }else {
            console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação: ${pontuacaoUsuario}`)
            console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação: ${pontuacaoComputador}`)

            if ( pontuacaoUsuario > pontuacaoComputador ){
               console.log("O usuário ganhou!")
            }else if( pontuacaoUsuario < pontuacaoComputador ){
               console.log("O computador ganhou!")
            }else {
               console.log("Empate!")
            }
         }
      }else {
         console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação: ${pontuacaoUsuario}`)
         console.log(`Computador - cartas: ${primeiraCartaComputador.texto} ${segundaCartaComputador.texto} - pontuação: ${pontuacaoComputador}`)

         if ( pontuacaoUsuario > pontuacaoComputador ){
            console.log("O usuário ganhou!")
         }else if( pontuacaoUsuario < pontuacaoComputador ){
            console.log("O computador ganhou!")
         }else {
            console.log("Empate!")
         }
      }
   }   
}else {
   console.log("O jogo acabou!")
}
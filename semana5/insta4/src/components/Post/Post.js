import React from 'react';
import styled from 'styled-components';

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeSalvoBranco from '../../img/bookmark-white.svg'
import iconeSalvoPreto from '../../img/bookmark.svg'
import iconeCompartilhar from '../../img/share.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {IconeSalvos} from '../IconeSalvos/IconeSalvos'
import {IconeSemContador} from '../IconeSemContador/IconeSemContador'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

class Post extends React.Component {
  state = {
    curtido: false, 
    numeroCurtidas: 0,
    comentando: false,
    compartilhando: false,
    numeroComentarios: 0,
    salvo: false,
    comentarios: []
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    })

    if ( !this.state.curtido){
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      })
    }else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      })
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = (comentario) => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })

		//Copiar array de comentarios, adicionando o novoComentario
		const novoArrayComentarios = [...this.state.comentarios, comentario]
		//Atualiza o estado "comentarios" com o "novoArrayComentarios"
    this.setState({ comentarios: novoArrayComentarios})
  }

  onClickSalvar = () => {
    this.setState({
      salvo: !this.state.salvo,
    })
  }

  onClickCompartilhar = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoCompartilhar = (event) => {
    switch (event.target.value){
      case 'Facebook':
        alert('Compartilhar no Facebook!')
      break;
      case 'Instagram':
        alert('Compartilhar no Instagram!')
      break; 
      case 'Twitter':
        alert('Compartilhar no Twitter!')
      break; 
    }    
  }

  //Estilizacao
  DivPostContainer = styled.div`
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
  `

  DivPostHeader = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 10px;
  `

  DivPostFooter = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
  `

  ImgUserPhoto = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
  `

  ImgPostPhoto = styled.img`
    width: 100%;
  `

  DivComentarios = styled.div`
    background-color: #DCDCDC;
    margin: 10px;
    padding: 1px 10px 1px 10px;
    font-size: 14px;
    border-radius: 5px;
  `

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let componenteCompartilhar

    if(this.state.compartilhando) {
      componenteCompartilhar = <SecaoCompartilhar aoCompartilhar={this.aoCompartilhar}/>
    }

    let iconeSalvo

    if(this.state.salvo) {
      iconeSalvo = iconeSalvoPreto
    }else {
      iconeSalvo = iconeSalvoBranco
    }

    const listaComentarios = this.state.comentarios.map((comentario, id)=>{
      return (
        <this.DivComentarios>
          <p key={id}>{comentario}</p>
        </this.DivComentarios>
      )
    })

    return <this.DivPostContainer>
      <this.DivPostHeader>
        <this.ImgUserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        <IconeSalvos
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvar}
        />
      </this.DivPostHeader>

      <this.ImgPostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <this.DivPostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeSemContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}
        />
      </this.DivPostFooter>
      {componenteCompartilhar}
      {componenteComentario}
      {listaComentarios}
    </this.DivPostContainer>
  }
}

export default Post
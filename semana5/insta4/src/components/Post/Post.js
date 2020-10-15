import React from 'react'
import './Post.css'

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
    salvo: false
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

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
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

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
        <IconeSalvos
          icone={iconeSalvo}
          onClickIcone={this.onClickSalvar}
        />
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
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
      </div>
      {componenteCompartilhar}
      {componenteComentario}
    </div>
  }
}

export default Post
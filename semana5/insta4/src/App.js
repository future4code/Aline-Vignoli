import React from 'react';
import './App.css';
import styled from 'styled-components';
import Post from './components/Post/Post';
import fotoPerfilAline from './img/perfil-aline.jpg';
import logoLabenu from './img/labenu-logo.png';


class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario: 'Nyh Vignoli',
        fotoUsuario: fotoPerfilAline,
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'Labenu',
        fotoUsuario: logoLabenu,
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }
    ],

    valorInputUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  postar = ()=> {

    if ( this.validarInputs(
      this.state.valorInputUsuario,
      this.state.valorInputFotoUsuario,
      this.state.valorInputFotoPost)
    ){
      const novoPost = {
        nomeUsuario: this.state.valorInputUsuario,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost
      }
  
      //Copiar array de posts, adicionando o novoPost
      const novoArrayPosts = [novoPost, ...this.state.posts]
      //Atualiza o estado "posts" com o "novoArrayPosts"
      this.setState({ posts: novoArrayPosts})
      //Limpa os inputs
      this.setState({
        valorInputUsuario: "",
        valorInputFotoUsuario: "",
        valorInputFotoPost: ""
      })
    }
  }

  validarInputs = (nome, fotoUsuario, fotoPost)=> {
    if (nome !=="" && fotoUsuario !=="" && fotoPost !==""){
      return true
    }else {
      window.alert("Preencha todos os campos para fazer uma postagem!")
    }
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value})
  }

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value})
  }

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value})
  }

  //Estilização
  DivInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
    padding: 20px;
  ` 
  InputEstilizado = styled.input`
    padding: 5px;
  `
  BotaoEstilizado = styled.button`
    background-color: #008080;
    color: #FFF;
    padding: 5px;
    border-radius: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
  `

  render() {
    const listaDePosts = this.state.posts.map((post)=>{
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <div className={'app-container'}>
        <this.DivInputs>
          <this.InputEstilizado
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <this.InputEstilizado
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"URL da foto de usuário"}
          />
          <this.InputEstilizado
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"URL da foto do post"}
          />
          <this.BotaoEstilizado onClick={this.postar}>POSTAR</this.BotaoEstilizado>
        </this.DivInputs>
        {listaDePosts}
      </div>
    );
  }
}

export default App;

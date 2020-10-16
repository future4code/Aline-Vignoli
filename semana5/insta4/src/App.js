import React from 'react';
import './App.css';
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
    ]
  }

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
        {/* <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150?a=1'}
        />

        <Post 
          nomeUsuario={'Nyh Vignoli'}
          fotoUsuario={fotoPerfilAline}
          fotoPost={'https://picsum.photos/200/150?a=2'}
        />

        <Post 
          nomeUsuario={'Labenu'}
          fotoUsuario={logoLabenu}
          fotoPost={'https://picsum.photos/200/150?a=3'}
        /> */}
        {listaDePosts}
      </div>
    );
  }
}

export default App;

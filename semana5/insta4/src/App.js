import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import fotoPerfilAline from './img/perfil-aline.jpg';
import logoLabenu from './img/labenu-logo.png';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
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
        />
      </div>
    );
  }
}

export default App;

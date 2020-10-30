import './App.css';
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CreatePlaylist from './components/CreatePlaylist';
import PlaylistsView from './components/PlaylistsView';

const MainContainer = styled.div`
  display: flex;
  background-color: #CDCDCD;
  height: 100vh;
`

const ContentContainer = styled.div`
  flex-grow: 1;
`

class App extends React.Component {

  state = {
    createPlaylistActive : false,
    playlistView : false
  }

  showPlaylists = () => {
    this.setState({ playlistView : !this.state.playlistView })
  }

  handleCreatePlaylist = () => {
    this.setState({ createPlaylistActive : !this.state.createPlaylistActive })
  }

  render () {

    const homePage = (
      <div>
        <h3>Bem vinda(o) ao Labefy, que tal começar criando uma playlist?</h3>
        <button onClick={this.handleCreatePlaylist}>Criar playlist</button>
      </div>
    )

    const createPlaylistPage = <CreatePlaylist cancelButton={this.handleCreatePlaylist}/>

    return (
      <div className="App">
        <Header showPlaylists={this.showPlaylists}/>
        <MainContainer>
          <ContentContainer>
            {this.state.createPlaylistActive ? createPlaylistPage : homePage }
          </ContentContainer>
          {this.state.playlistView && <PlaylistsView/>}
        </MainContainer>
      </div>
    );
  }
}

export default App;

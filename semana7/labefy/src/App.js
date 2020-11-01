import './App.css';
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import CreatePlaylist from './components/CreatePlaylist';
import PlaylistsView from './components/PlaylistsView';

const MainContainer = styled.div`
  display: flex;
  background-color: rgba(199, 63, 63, 0.29);
  padding-top: 20px;
  flex-grow: 1;
`

const ContentContainer = styled.div`
  justify-content: center;
  flex-grow: 1;
`

const MainButton = styled.button`
  border: none;
  outline: 0px auto;
  border-radius: 5px;
  color: #FFF;
  background-color: #AB3131;
  padding: 10px;
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
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
        <MainButton onClick={this.handleCreatePlaylist}>CRIAR PLAYLIST</MainButton>
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

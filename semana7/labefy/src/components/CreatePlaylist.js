import React from 'react';
import axios from 'axios';

class CreatePlaylist extends React.Component {

    state = {
        playlistNameValue: ""
    }

    onChangePlaylistName = (event) => {
        this.setState({ playlistNameValue: event.target.value })
    }

    createPlaylist = () => {
        const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            name: this.state.playlistNameValue
        }
        const axiosConfig = {
            headers: {
                Authorization: 'aline-vignoli-dumont'
            }
        }

        axios.post( baseURL, body, axiosConfig )
        .then(()=> {
            this.setState({playlistNameValue: ""})
            window.alert("Sua playlist foi criada!")
        }).catch(error => {
            console.log(error.message)
        })
    }

    render () {

        return (
            <div>
                <input 
                    value={this.state.playlistNameValue}
                    placeholder={"Nome da Playlist"}
                    type={"text"}
                    onChange={this.onChangePlaylistName}
                />
                <button onClick={this.props.cancelButton}>Cancelar</button>
                <button onClick={this.createPlaylist}>Salvar</button>
            </div>
        );
    }
}

export default CreatePlaylist;
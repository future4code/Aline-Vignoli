import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddTrackForm from './AddTrackForm';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2vw;
    gap: 10px;
    width: 40vw;
    background-color: #D34DDD;
`

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const axiosConfig = {
    headers: {
        Authorization: 'aline-vignoli-dumont'
    }
}

class PlaylistsView extends React.Component {

    state = {
        playlists: [],
        selectedPlaylistId: "",
        trackName: "",
        trackArtist: "",
        trackURL: "",
        isAddTrackFormVisible: false
    }

    componentDidMount = () => {
        this.getAllPlaylists()
    }

    getAllPlaylists = () => {
        axios.get( baseURL, axiosConfig )
        .then(response => {
            this.setState({ playlists: response.data.result.list })
        }).catch(error => {
            console.log(error.message)
        })
    }

    deletePlaylist = (playlistId) => {
        axios.delete( `${baseURL}/${playlistId}`, axiosConfig )
        .then(() => {
            window.alert("Playlist removida!")
            this.getAllPlaylists()
        }).catch(error => {
            console.log(error.message)
        })
    }

    addTrackToPlaylist = (playlistId) => {
        const body = {
            name: this.state.trackName,
            artist: this.state.trackArtist,
            url: this.state.trackURL
        }

        axios.post( `${baseURL}/${playlistId}/tracks`, body, axiosConfig )
        .then(()=> {
            this.setState({ trackName: "", trackArtist: "", trackURL: ""})
            window.alert("Música adicionada à playlist!")
        }).catch(error => {
            console.log(error.message)
        })
    }

    handleAddTrackForm = (playlistId) => {
        this.setState({ 
            isAddTrackFormVisible: !this.state.isAddTrackFormVisible, 
            selectedPlaylistId : playlistId
        })
    }

    onChangeTrackName = (event) => {
        this.setState({ trackName: event.target.value })
    }

    onChangeArtistName = (event) => {
        this.setState({ trackArtist: event.target.value })
    }

    onChangeUrl = (event) => {
        this.setState({ trackURL: event.target.value })
    }

    render () {
        const renderedPlaylists = this.state.playlists.map((playlist => {
            return ( 
                <li key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => this.handleAddTrackForm(playlist.id)}>add músicas</button>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>del</button>
                    {this.state.isAddTrackFormVisible && playlist.id === this.state.selectedPlaylistId ?             <AddTrackForm 
                        handleAddTrackForm={this.handleAddTrackForm}
                        playlistId={playlist.id}
                        trackNameValue={this.state.trackName}
                        trackArtistValue={this.state.trackArtist}
                        trackURLValue={this.state.trackURL}
                        onChangeTrackName={this.onChangeTrackName}
                        onChangeArtistName={this.onChangeArtistName}
                        onChangeUrl={this.onChangeUrl}
                        addTrackToPlaylist={this.addTrackToPlaylist}
                    /> : <div></div>}
                </li>
            )
        }))

        return (
            <Container>
                {renderedPlaylists}
            </Container>
        );
    }
}

export default PlaylistsView;
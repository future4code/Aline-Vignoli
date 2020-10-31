import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddTrackForm from './AddTrackForm';
import rightArrow from '../img/right-arrow.jpg';
import downArrow from '../img/arrow.jpg';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2vw;
    gap: 10px;
    width: 40vw;
    background-color: #D34DDD;
`

const PlaylistsContainer = styled.ul`
    text-align: left;
    padding: 10px;
`

const ListItem = styled.li`
    padding: 10px;
`

const Icons = styled.img`
    border-radius: 5px;
    width: 24px;
    &:hover {
        cursor: pointer;
        opacity: 0.7
    }
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
        playlistTracks: [],
        selectedPlaylistId: "",
        trackName: "",
        trackArtist: "",
        trackURL: "",
        isAddTrackFormVisible: false,
        isTrackListVisible: false
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

    getPlaylistTracks = (playlistId) => {
        axios.get( `${baseURL}/${playlistId}/tracks`, axiosConfig )
        .then(response => {
            this.setState({ 
                isTrackListVisible: !this.state.isTrackListVisible,
                playlistTracks: response.data.result.tracks,
                selectedPlaylistId : playlistId })
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
        const renderedTracks = this.state.playlistTracks.map((track => {
            return (
                <li key={track.id}>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    <audio src={track.url} controls={true}/>
                </li>
            )
        }))

        const renderedPlaylists = this.state.playlists.map((playlist => {
            const isSelected = playlist.id === this.state.selectedPlaylistId
            const isEmpty = this.state.playlistTracks.length === 0
            return ( 
                <ListItem key={playlist.id}>   
                    <Icons src={isSelected && this.state.isTrackListVisible ? downArrow : rightArrow} onClick={() => this.getPlaylistTracks(playlist.id)}/>
                    {playlist.name}
                    <button onClick={() => this.handleAddTrackForm(playlist.id)}>add músicas</button>
                    <button onClick={() => this.deletePlaylist(playlist.id)}>del</button>
                    {this.state.isAddTrackFormVisible && isSelected ?             
                        <AddTrackForm 
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
                    <ul>
                        { this.state.isTrackListVisible && !isEmpty && isSelected ?
                        renderedTracks : <div></div>}
                    </ul>
                </ListItem>
            )
        }))

        return (
            <Container>
                <PlaylistsContainer>
                    {renderedPlaylists}
                </PlaylistsContainer>
            </Container>
        );
    }
}

export default PlaylistsView;
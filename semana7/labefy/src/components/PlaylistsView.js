import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import AddTrackForm from './AddTrackForm';
import rightArrow from '../img/right-arrow.jpg';
import downArrow from '../img/arrow.jpg';
import removePlaylist from '../img/remove-playlist.png';

const Container = styled.div`
    padding: 2vw;
    width: 30vw;
    background-color: rgba(0, 0, 0, 0.42);
`

const PlaylistsContainer = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
`

const ListItem = styled.li`
    text-align: left;
    padding: 5px;
    list-style: none;
`

const TrackItem = styled.li`
    text-align: left;
    padding: 5px;
    list-style: none;
`

const Icons = styled.img`
    background-color: #FFF;
    margin-right: 10px;
    border-radius: 5px;
    width: 24px;
    &:hover {
        cursor: pointer;
        opacity: 0.7
    }
` 

const ButtonsContainer = styled.div`
    display: flex;
    padding: 5px;
    gap: 10px;
`

const PlaylistNameContainer = styled.span`
   
`

const AddTrackButton = styled.button`
    border: none;
    border-radius: 5px;
    color: #FFF;
    outline: 0px auto;
    background-color: #AB3131;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

const TrackName = styled.h4`
    margin: 3px;
`

const TrackArtist = styled.p`
    font-size: 12px;
    margin: 3px;
`

const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const axiosConfig = {
    headers: {
        Authorization: 'aline-vignoli-dumont'
    }
}

class PlaylistsView extends React.Component {

    state = {
        playlistTracks: [],
        selectedPlaylistId: "",
        trackName: "",
        trackArtist: "",
        trackURL: "",
        isAddTrackFormVisible: false,
        isTrackListVisible: false
    }

    componentDidMount = () => {
        this.props.getPlaylists()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevProps.playlists !== this.props.playlists) {
            this.props.getPlaylists()
        }

        if (prevState.playlistTracks !== this.state.playlistTracks){
            this.getPlaylistTracks()
        }
    }

    deletePlaylist = (playlist) => {
        if ( window.confirm (`Tem certeza que deseja excluir a playlist "${playlist.name}" da sua biblioteca?`) ){
            axios.delete( `${baseURL}/${playlist.id}`, axiosConfig )
            .then(() => {
                window.alert("Playlist removida com sucesso!")
                this.getAllPlaylists()
            }).catch(error => {
                console.log(error.message)
            })
        }
    }

    addTrackToPlaylist = (playlistId) => {
        const body = {
            name: this.state.trackName,
            artist: this.state.trackArtist,
            url: this.state.trackURL
        }

        axios.post( `${baseURL}/${playlistId}/tracks`, body, axiosConfig )
        .then(()=> {
            this.setState({ 
                trackName: "", 
                trackArtist: "", 
                trackURL: "", 
                isAddTrackFormVisible: false,
                isTrackListVisible: true
            })
            window.alert("Música adicionada à playlist!")
            this.getPlaylistTracks()
        }).catch(error => {
            console.log(error.message)
        })
    }

    getPlaylistTracks = (playlistId) => {
        axios.get( `${baseURL}/${playlistId}/tracks`, axiosConfig )
        .then(response => {
            if ( response.data.result.tracks.length !== 0 ){
                this.setState({ 
                    isTrackListVisible: !this.state.isTrackListVisible,
                    playlistTracks: response.data.result.tracks,
                    selectedPlaylistId : playlistId })
            }else {
                window.alert("Você ainda não adicionou músicas para essa playlist")
            }
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
                <TrackItem key={track.id}>
                    <TrackName>{track.name}</TrackName>
                    <TrackArtist>{track.artist}</TrackArtist>
                    <audio src={track.url} controls={true}/>
                </TrackItem>
            )
        }))

        const renderedPlaylists = this.props.playlists.map((playlist => {
            const isSelected = playlist.id === this.state.selectedPlaylistId
            const isEmpty = this.state.playlistTracks.length === 0
            return ( 
                <ListItem key={playlist.id}> 
                    <PlaylistNameContainer>
                        <Icons src={isSelected && this.state.isTrackListVisible ? downArrow : rightArrow} onClick={() => this.getPlaylistTracks(playlist.id)}/>
                        <span>{playlist.name}</span>
                    </PlaylistNameContainer>  
                    <ButtonsContainer>
                        <AddTrackButton onClick={() => this.handleAddTrackForm(playlist.id)}>adicionar música</AddTrackButton>
                        <Icons src={removePlaylist} onClick={() => this.deletePlaylist(playlist)}/>
                    </ButtonsContainer>
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
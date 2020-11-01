import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const MainContainer =  styled.div`
    margin: auto;
    width: 20vw;
    gap: 20px;
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    width: 100%;
    padding: 10px;
`

const ButtonsContainer = styled.div`
    width: 110%;
    display: flex;
    justify-content: space-between;
    gap: 2vw;
`

const MainButton = styled.button`
    width: 100%;
    border: none;
    outline: 0px auto;
    background-color: #AB3131;
    padding: 10px;
    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`

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
            <MainContainer>
                <Input 
                    value={this.state.playlistNameValue}
                    placeholder={"Nome da Playlist"}
                    type={"text"}
                    onChange={this.onChangePlaylistName}
                />
                <ButtonsContainer>
                    <MainButton onClick={this.props.cancelButton}>Cancelar</MainButton>
                    <MainButton onClick={this.createPlaylist}>Salvar</MainButton>
                </ButtonsContainer>
            </MainContainer>
        );
    }
}

export default CreatePlaylist;
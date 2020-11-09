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
    font-size: 20px;
    font-family: "Overpass", Arial, Helvetica, sans-serif;
    border-radius: 5px;
    padding: 10px;
`

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10%;
`

const MainButton = styled.button`
    font-weight: bolder;
    font-size: 30px;
    font-family: "Fjalla One", Arial, Helvetica, sans-serif;
    width: 100%;
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

class CreatePlaylist extends React.Component {

    state = {
        playlistNameValue: ""
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
            window.alert("Playlist criada com sucesso!")
        }).catch(error => {
            if ( error.message === "Request failed with status code 400"){
                window.alert("Você já tem uma playlist com esse nome!")
            }
            console.log(error.message)              
        })
    }

    verifyPlaylistNameValue = () => {
        if ( this.state.playlistNameValue !== "" ){
            const playlistNames = this.props.playlists.filter(playlist => {
                return playlist.name === this.state.playlistNameValue
            })

            if ( playlistNames.lenght !== 1 ){
                this.createPlaylist()
            }
        }else {
            window.alert("Por favor, informe o nome da playlist")
        }
    }

    onChangePlaylistName = (event) => {
        this.setState({ playlistNameValue: event.target.value })
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
                    <MainButton onClick={this.verifyPlaylistNameValue}>Salvar</MainButton>
                </ButtonsContainer>
            </MainContainer>
        );
    }
}

export default CreatePlaylist;
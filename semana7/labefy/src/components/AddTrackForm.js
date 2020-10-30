import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

class AddTrackForm extends React.Component {

    render () {
        return (
            <FormContainer>
                <input 
                    value={this.props.trackNameValue}
                    placeholder={"Título da música"}
                    type={"text"}
                    onChange={this.props.onChangeTrackName}
                />
                <input 
                    value={this.props.trackArtistValue}
                    placeholder={"Artista"}
                    type={"text"}
                    onChange={this.props.onChangeArtistName}
                />
                <input 
                    value={this.props.trackURLValue}
                    placeholder={"Nome da Playlist"}
                    type={"text"}
                    onChange={this.props.onChangeUrl}
                />
                <button onClick={() => this.props.handleAddTrackForm(this.props.playlistId)}>Cancelar</button>
                <button onClick={() => this.props.addTrackToPlaylist(this.props.playlistId)}>Salvar</button>
            </FormContainer>
        );
    }
}

export default AddTrackForm;
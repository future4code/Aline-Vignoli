import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    margin-top: 2vh;
    align-self: flex-end;
    width: 29vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Input = styled.input`
    font-size: 20px;
    font-family: "Overpass", Arial, Helvetica, sans-serif;
    border-radius: 5px;
    padding: 10px;
`

const ButtonsContainer = styled.div`
    align-self: flex-end;
    width: 20vw;
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

class AddTrackForm extends React.Component {

    render () {
        return (
            <FormContainer>
                <Input 
                    value={this.props.trackNameValue}
                    placeholder={"Título da música"}
                    type={"text"}
                    onChange={this.props.onChangeTrackName}
                />
                <Input 
                    value={this.props.trackArtistValue}
                    placeholder={"Artista"}
                    type={"text"}
                    onChange={this.props.onChangeArtistName}
                />
                <Input 
                    value={this.props.trackURLValue}
                    placeholder={"url da música"}
                    type={"text"}
                    onChange={this.props.onChangeUrl}
                />
                <ButtonsContainer>
                    <MainButton onClick={() => this.props.handleAddTrackForm(this.props.playlistId)}>
                        Cancelar
                    </MainButton>
                    <MainButton onClick={() => this.props.addTrackToPlaylist(this.props.playlistId)}>
                        Salvar
                    </MainButton>
                </ButtonsContainer>
            </FormContainer>
        );
    }
}

export default AddTrackForm;
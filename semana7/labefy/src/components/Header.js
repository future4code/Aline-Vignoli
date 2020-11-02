import React from 'react';
import styled from 'styled-components';
import playlistIcon from '../img/playlist-icon.png'

const Container = styled.header`
    height: 20vh;
    background-color: #AB3131;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 3vw 0 10vw;
`

const Tittle = styled.h1`
    font-size: 3em;
`

const PlaylistIcon = styled.img`
    height: 50%;
    padding: 10px;
    opacity: 0.9;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`

class Header extends React.Component {
    render () {
        return (
        <Container>
            <Tittle>LABEFY</Tittle>
            <PlaylistIcon src={playlistIcon} onClick={this.props.showPlaylists}/>
        </Container>
        );
    }
}

export default Header;

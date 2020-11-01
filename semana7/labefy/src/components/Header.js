import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    background-color: #AB3131;
    display: flex;
    justify-content: space-between;
    padding: 0 3vw 0 10vw;
`

const ShowPlaylists = styled.h2`
    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

class Header extends React.Component {
    render () {
        return (
        <Container>
            <h1>LABEFY</h1>
            <ShowPlaylists onClick={this.props.showPlaylists}>Ver playlists</ShowPlaylists>
        </Container>
        );
    }
}

export default Header;

import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 0 3vw 0 10vw;
`

class Header extends React.Component {
    render () {
        return (
        <Container>
            <h1>LABEFY</h1>
            <h2 onClick={this.props.showPlaylists}>Ver playlists</h2>
        </Container>
        );
    }
}

export default Header;

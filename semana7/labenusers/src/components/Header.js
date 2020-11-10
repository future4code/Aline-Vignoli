import React from 'react';
import styled from 'styled-components';

//STYLED COMPONENTS
const Button = styled.h3`
  color: #836FFF;
  outline: none;
  padding: 5px;
  &:hover {
    font-size: 1.3em;
    transition: 0.1s all ease-in;
    color: #836FF6;
    cursor: pointer;
  }
`

const Container = styled.header`
  padding: 20px;
`

class Header extends React.Component{

  render(){
    return (
      <Container>
        <Button onClick={this.props.changePage}>{this.props.isHomePage? "LISTA DE USUÁRIOS" : "HOME"}</Button>
      </Container>
    );
  }
}

export default Header;

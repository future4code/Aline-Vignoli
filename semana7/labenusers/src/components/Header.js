import React from 'react';
import styled from 'styled-components';

//STYLED COMPONENTS
const Button = styled.button`
  padding: 5px;
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

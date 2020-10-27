import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 5px;
`

class Header extends React.Component{

  render(){
    return (
      <div>
        <header>
          <Button onClick={this.props.changePage}>{this.props.isHomePage? "LISTA DE USUÁRIOS" : "HOME"}</Button>
        </header>
      </div>
    );
  }
}

export default Header;

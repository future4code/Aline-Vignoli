import React from 'react';
import styled from 'styled-components';

class Header extends React.Component{

  render(){
    return (
      <div>
        <header>
          <button onClick={this.props.changePage}>{this.props.isHomePage? "LISTA DE USUÁRIOS" : "HOME"}</button>
        </header>
      </div>
    );
  }
}

export default Header;

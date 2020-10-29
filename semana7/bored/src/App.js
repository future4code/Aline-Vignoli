import './App.css';
import React from 'react';
import styled from 'styled-components';
import Activities from './components/Activities';
import boredLogo from './img/bored-icon.png';

const Header = styled.header`
  font-family: "Arial Black", Gadget, sans-serif;
  padding: 2.5vh;
  gap: 2.5vh;
  display: flex;
  background-color: #8E249F;
  color: #FFF;
  align-items: center;
  justify-content: flex-start;
`

const Logo = styled.img `
  width: 8vw;
`

const StyledH2= styled.h2 `
  font-size: 2.5vw;
`

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Header>
          <Logo src={boredLogo} alt={"bored emoji"}/>
          <StyledH2>Bored? We can help you to find something to do!</StyledH2>
        </Header>
        <Activities />
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Filter from './components/Filter';
import Activities from './components/Activities';

const Header = styled.header`
  height: 15vh;
  display: flex;
  background-color: #8E249F;
  color: #FFF;
  align-items: center;
  justify-content: center;
`

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Header>
          <h2>Bored? We can help you to find something to do!</h2>
        </Header>
        <Activities />
      </div>
    );
  }
}

export default App;

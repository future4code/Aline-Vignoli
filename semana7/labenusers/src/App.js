import './App.css';
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import UsersList from './components/UsersList/UsersList';
import SignUpForm from './components/SignUpForm';

//STYLED COMPONENTS
const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

class App extends React.Component{

  state = {
    homePage: true
  }

  changePage = () => {
    this.setState({homePage: !this.state.homePage})
  }

  render(){
    return (
      <MainContainer>
        <Header changePage={this.changePage} isHomePage={this.state.homePage}/>
        {this.state.homePage ? <SignUpForm /> : <UsersList />}
      </MainContainer>
    );
  }
}

export default App;

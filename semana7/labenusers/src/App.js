import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import UsersList from './components/UsersList/UsersList';
import SignUpForm from './components/SignUpForm';

const MainContainer = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

class App extends React.Component{

  state = {
    usersList: [],
    homePage: true,
  }

  changePage = () => {
    this.setState({homePage: !this.state.homePage})
  }

  getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    {
      headers: {
        Authorization: "aline-vignoli-dumont"
      }
    }).then(response => {
      this.setState({usersList: response.data})
    }).catch(error => {
      console.log(error.message)
    })
  }

  deleteUser = (user) => {
    if (window.confirm(`Tem certeza que deseja deletar "${user.name}" da sua lista de usuários?`)) {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
      {
        headers: {
          Authorization: "aline-vignoli-dumont"
        }
      }).then(() => {
        window.alert(`${user.name} foi removido(a) com sucesso!`)
        this.getAllUsers()
      }).catch(error => {
        window.alert("Erro ao deletar usuário")
        console.log(error.message)
      })
    }
  }

  render(){
    return (
      <MainContainer>
        <Header changePage={this.changePage} isHomePage={this.state.homePage}/>
        {this.state.homePage ? 
        <SignUpForm /> : 
        <UsersList
          list={this.state.usersList}
          renderList={this.getAllUsers}
          clickToRemove={this.deleteUser}/>
        }
      </MainContainer>
    );
  }
}

export default App;

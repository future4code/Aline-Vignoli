import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import UsersList from './components/UsersList/UsersList';
import SignUpForm from './components/SignUpForm';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

class App extends React.Component{

  state = {
    usersList: [
      // {
      //   id: "1",
      //   name: "Aline Vignoli",
      //   email: "nyhv.contato@gmail.com"
      // },
      // {
      //   id: "2",
      //   name: "Germana Whoops",
      //   email: "ge@gmail.com"
      // },
      // {
      //   id: "3",
      //   name: "Hilton Tints",
      //   email: "hilton@gmail.com"
      // },
      // {
      //   id: "4",
      //   name: "Pessoa Muito Loca",
      //   email: "pessoa@gmail.com"
      // }
    ],
    nameValue: "",
    emailValue: "",
    homePage: true
  }

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value})
  }

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value})
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

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, 
    {
      headers: {
        Authorization: "aline-vignoli-dumont"
      }
    }).then(response => {
      alert("Usuario cadastrado com sucesso!")
      this.setState({nameValue: ""})
      this.setState({emailValue: ""})
    }).catch(error => {
      alert("Erro ao cadastrar usuário")
      console.log(error.message)
    })
  }

  deleteUser = (user) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${user.id}`,
    {
      headers: {
        Authorization: "aline-vignoli-dumont"
      }
    }).then(response => {
      alert(`O usuário ${user.name} foi removido!`)
      this.getAllUsers()
    }).catch(error => {
      alert("Erro ao deletar usuário")
      console.log(error.message)
    })
  }

  render(){
    return (
      <MainContainer>
        <Header changePage={this.changePage} isHomePage={this.state.homePage}/>
        {this.state.homePage ? 
        <SignUpForm
        nameValue={this.state.nameValue}
        onChangeName={this.onChangeNameValue}
        emailValue={this.state.emailValue}
        onChangeEmail={this.onChangeEmailValue}
        signUpClick={this.createUser}
        /> : 
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

import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserCard from './UserCard';
import UserProfile from './UserProfile';

//STYLED COMPONENTS
const MainContainer = styled.div`
  background-color: #836FFF;
  width: 50vw;
  border-radius: 5px;
  box-shadow: 0.1px 2px 3px #000;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Tittle = styled.h2` 
  text-shadow: 0.1px 2px 1px #000;
  margin: auto;
  color: #FFF;
`

const List = styled.ul`
  padding-inline-start: 0;
`

//DATABASE CONFIG
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const axiosConfig = {
  headers: {
    Authorization: "aline-vignoli-dumont"    
  }
}

class UsersList extends React.Component{

  state = {
    usersList: [],
    displayUserDetails: false,
    selectedUser: {}
  }

  componentDidMount = () => {
    this.getAllUsers()
  }

  getAllUsers = () => {
    axios.get( baseURL , axiosConfig ).then(response => {
      this.setState({usersList: response.data})
    }).catch(error => {
      console.log(error.message)
    })
  }

  deleteUser = (user) => {
    if ( window.confirm(`Tem certeza que deseja deletar "${user.name}" da sua lista de usuários?`) ) {
        axios.delete(`${baseURL}/${user.id}`, axiosConfig ).then(() => {
        window.alert(`${user.name} foi removido(a) com sucesso!`)
        this.getAllUsers()
      }).catch(error => {
        window.alert("Erro ao deletar usuário")
        console.log(error.message)
      })
    }
  }

  viewUserProfile = () => {
    this.setState({displayUserDetails: !this.state.displayUserDetails})
  }

  getUserById = (userId) => {
    this.viewUserProfile()
    axios.get(`${baseURL}/${userId}`, axiosConfig ).then(response => {
      this.setState({selectedUser: response.data})
    }).catch(error => {
      console.log(error.message)
    })
  }

  render(){
    const renderedList = this.state.usersList.map(user => {
      return ( 
        <UserCard 
          key={user.id} 
          user={user} 
          clickToRemove={this.deleteUser}
          getUser={this.getUserById} /> 
      ) 
    })

    return (
      <MainContainer>
        <Tittle>{this.state.displayUserDetails ? this.state.selectedUser.name : "Usuários Cadastrados"}</Tittle>
        {this.state.displayUserDetails ? 
          <UserProfile 
            viewProfile={this.viewUserProfile}
            selectedUser={this.state.selectedUser}/> :
          <List>{renderedList}</List>
        }
      </MainContainer>
    );
  }
}

export default UsersList;
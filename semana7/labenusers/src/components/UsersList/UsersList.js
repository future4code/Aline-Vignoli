import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserCard from './UserCard';
import UserProfile from './UserProfile';

const MainContainer = styled.div`
  background-color: #836FFF;
  width: 400px;
  border-radius: 5px;
  box-shadow: 0.1px 2px 3px #000;
  padding: 30px;
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

class UsersList extends React.Component{

  state = {
    displayUserDetails: false,
    selectedUser: {}
  }

  componentDidMount = () => {
    this.props.renderList()
  }

  viewUserProfile = () => {
    this.setState({displayUserDetails: !this.state.displayUserDetails})
  }

  getUserById = (userId) => {
    this.viewUserProfile()
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
    {
    headers: {
        Authorization: "aline-vignoli-dumont"
    }
    }).then(response => {
    this.setState({selectedUser: response.data})
    }).catch(error => {
    console.log(error.message)
    })
 }

  render(){
    const renderedList = this.props.list.map(user => {
      return <UserCard 
      key={user.id} 
      user={user} 
      clickToRemove={this.props.clickToRemove}
      viewProfile={this.viewUserProfile}
      getUser={this.getUserById}
      />   
    })

    return (
      <MainContainer>
        <Tittle>{this.state.displayUserDetails ? "Detalhes" :"Usuários Cadastrados"}</Tittle>
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
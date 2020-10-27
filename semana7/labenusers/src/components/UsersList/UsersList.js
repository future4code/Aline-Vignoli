import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserCard from './UserCard';
import UserProfile from './UserProfile';

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
      <div>
        <h2>{this.state.displayUserDetails ? "Detalhes" :"Usuários Cadastrados"}</h2>
        {this.state.displayUserDetails ? 
          <UserProfile 
            viewProfile={this.viewUserProfile}
            selectedUser={this.state.selectedUser}/> :
          <ul>{renderedList}</ul>
        }
      </div>
    );
  }
}

export default UsersList;
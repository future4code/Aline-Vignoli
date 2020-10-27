import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UserCard from './UserCard';

class UsersList extends React.Component{

  componentDidMount = () => {
    this.props.renderList()
  }

  render(){
    return (
      <div>
        <h2>Usuários Cadastrados</h2>
        <ul>
        {this.props.list.map(user => {
            return <UserCard key={user.id} user={user} clickToRemove={this.props.clickToRemove}/>
        })}
        </ul>
      </div>
    );
  }
}

export default UsersList;
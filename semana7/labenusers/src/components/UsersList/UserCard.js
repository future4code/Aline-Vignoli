import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class UserCard extends React.Component{

  render(){
    return (
      <div>
        <li>{this.props.user.name}</li>
    <button onClick={()=> this.props.clickToRemove(this.props.user)}>Deletar</button>
      </div>
    );
  }
}

export default UserCard;
import React from 'react';
import styled from 'styled-components';

class UserCard extends React.Component{

  render(){
    return (
      <div>
        <li onClick={()=> this.props.getUser(this.props.user.id)}>{this.props.user.name}</li>
        <button onClick={()=> this.props.clickToRemove(this.props.user)}>Deletar</button>
      </div>
    );
  }
}

export default UserCard;
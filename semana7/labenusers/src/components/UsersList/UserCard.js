import React from 'react';
import styled from 'styled-components';

//STYLED COMPONENTS
const CardContainer = styled.div`
  background-color: #FFF;
  width: 80%;
  border-radius: 5px;
  box-shadow: 0.1px 2px 3px #000;
  padding: 30px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Button = styled.button`
    padding: 5px;
`

class UserCard extends React.Component{

  render(){
    return (
      <CardContainer>
        <li onClick={()=> this.props.getUser(this.props.user.id)}>{this.props.user.name}</li>
        <Button onClick={()=> this.props.clickToRemove(this.props.user)}>Deletar</Button>
      </CardContainer>
    );
  }
}

export default UserCard;
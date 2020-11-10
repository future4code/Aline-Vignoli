import React from 'react';
import styled from 'styled-components';
import removeIcon from '../../img/remove-icon.jpg';

//STYLED COMPONENTS
const CardContainer = styled.div`
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: 0.1px 2px 3px #000;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

const RemoveIcon = styled.img`
  width: 26px;
  height: 26px;
  margin: 10px;
  padding: 5px;
  &:hover {
    transition: 0.1s all ease-in;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`

const ListItem = styled.li`
  margin: 10px;
  display: inline-block;
  height: 3em;
  list-style-type: none;
  width: 90%;
  &:hover {
    font-size: 1.2em;
    transition: 0.1s all ease-in;
    color: #836FFF;
    margin: 0.9em;
    cursor: pointer;
  }
`

class UserCard extends React.Component{

  render(){
    return (
      <CardContainer>
        <ListItem onClick={()=> this.props.getUser(this.props.user.id)}>{this.props.user.name}</ListItem>
        <RemoveIcon src={removeIcon} onClick={()=> this.props.clickToRemove(this.props.user)}/>
      </CardContainer>
    );
  }
}

export default UserCard;
import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
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

class UserProfile extends React.Component{

    render(){
        return (
        <ProfileContainer>
            <p>Nome: {this.props.selectedUser.name}</p>
            <p>E-mail: {this.props.selectedUser.email}</p>
            <button onClick={this.props.viewProfile}>Voltar</button>
        </ProfileContainer>
        );
    }
}

export default UserProfile;
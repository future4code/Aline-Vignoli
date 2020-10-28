import React from 'react';
import styled from 'styled-components';
import goBackIcon from '../../img/back-icon.jpg';
import SignUpForm from '../SignUpForm';

//STYLED COMPONENTS
const ProfileContainer = styled.div`
  background-color: #FFF;
  border-radius: 5px;
  box-shadow: 0.1px 2px 3px #000;
  padding: 30px;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`

const GoBackIcon = styled.img`
    align-self: center;
    width: 46px;
    height: 46px;
    margin: 10px;
    padding: 5px;
    &:hover {
        transition: 0.1s all ease-in;
        width: 50px;
        height: 50px;
        cursor: pointer;
    }
`

class UserProfile extends React.Component{

    state = {
        isFormVisible: false
    }

    handleFormVisibility = () => {
        this.setState({ isFormVisible: !this.state.isFormVisible })
    }

    render(){

        const renderInfo = <div>
            <p><strong>Nome:</strong> {this.props.selectedUser.name}</p>
            <p><strong>E-mail:</strong> {this.props.selectedUser.email}</p>
            <button onClick={this.handleFormVisibility}>Editar</button>
        </div>   

        const renderForm = <div>
            <SignUpForm 
                editMode={this.state.isFormVisible}
                userToEdit={this.props.selectedUser}
                renderUpdatedUser={this.props.getUser}
                renderUpdateList={this.props.getAllUsers}/>
            </div>

        return (
        <ProfileContainer>
            {this.state.isFormVisible ? renderForm : renderInfo }
            <GoBackIcon src={goBackIcon} onClick={this.props.viewProfile}/>
        </ProfileContainer>
        );
    }
}

export default UserProfile;
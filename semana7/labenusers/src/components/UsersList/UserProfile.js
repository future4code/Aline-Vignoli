import React from 'react';
import styled from 'styled-components';

class UserProfile extends React.Component{

    render(){
        return (
        <div>
            <p>Nome: {this.props.selectedUser.name}</p>
            <p>E-mail: {this.props.selectedUser.email}</p>
            <button onClick={this.props.viewProfile}>Voltar</button>
        </div>
        );
    }
}

export default UserProfile;
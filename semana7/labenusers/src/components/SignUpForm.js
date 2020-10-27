import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

class SignUpForm extends React.Component{

  render(){
    return (
      <FormContainer>
          <div>
            <label for="name">Nome:</label>
            <input
              id="name"
              value={this.props.nameValue}
              onChange={this.props.onChangeName}
            />
          </div>
          <div>
            <label for="email">E-mail:</label>
            <input
              id="email"
              value={this.props.emailValue}
              onChange={this.props.onChangeEmail}
            />
          </div>
          <button onClick={this.props.signUpClick}>Cadastrar</button>
      </FormContainer>
    );
  }
}

export default SignUpForm;

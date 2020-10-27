import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
    background-color: #836FFF;
    width: 400px;
    border-radius: 5px;
    box-shadow: 0.1px 2px 3px #000;
    padding: 30px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const InputContainer = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    gap: 10px;
`

const Label = styled.label`
    width: 15%;
    padding: 5px;
`

const Input = styled.input`
    width: 90%;
    padding: 5px;
`

const Button = styled.button`
    padding: 5px;
` 

class SignUpForm extends React.Component{

  render(){
    return (
      <FormContainer>
          <InputContainer>
            <Label for="name">Nome:</Label>
            <Input
              id="name"
              value={this.props.nameValue}
              onChange={this.props.onChangeName}
            />
          </InputContainer>
          <InputContainer>
            <Label for="email">E-mail:</Label>
            <Input
              id="email"
              value={this.props.emailValue}
              onChange={this.props.onChangeEmail}
            />
          </InputContainer>
          <Button onClick={this.props.signUpClick}>CADASTRAR</Button>
      </FormContainer>
    );
  }
}

export default SignUpForm;

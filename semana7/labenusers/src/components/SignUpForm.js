import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
const axiosConfig = {
  headers: {
    Authorization: "aline-vignoli-dumont"    
  }
}

class SignUpForm extends React.Component{

  state = {
    nameValue: "",
    emailValue: "",
  }

  createUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }

    axios.post( baseURL, body, axiosConfig ).then(() => { 
      window.alert("Usuario cadastrado com sucesso!")
      this.setState({nameValue: "", emailValue:""})
    }).catch(error => {
      window.alert("Erro ao cadastrar usuário")
      console.log(error.message)
    })
  }

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value})
  }

  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value})
  }

  render(){
    return (
      <FormContainer>
          <InputContainer>
            <Label for="name">Nome:</Label>
            <Input
              id="name"
              value={this.state.nameValue}
              onChange={this.onChangeNameValue}
            />
          </InputContainer>
          <InputContainer>
            <Label for="email">E-mail:</Label>
            <Input
              id="email"
              value={this.state.emailValue}
              onChange={this.onChangeEmailValue}
            />
          </InputContainer>
          <Button onClick={this.createUser}>CADASTRAR</Button>
      </FormContainer>
    );
  }
}

export default SignUpForm;

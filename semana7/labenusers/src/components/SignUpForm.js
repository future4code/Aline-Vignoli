import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import saveIcon from '../img/save-icon.png';

//STYLED COMPONENTS
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

const Input = styled.input`
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  padding: 10px;
`

const SaveIcon = styled.img`
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

//DATABASE CONFIG
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

  editUser = (userId) => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue
    }

    axios.put( `${baseURL}/${userId}`, body, axiosConfig ).then(() => { 
      window.alert("Cadastro atualizado!")
      this.setState({nameValue: "", emailValue:""})
      this.props.renderUpdatedUser()
      this.props.renderUpdateList()
    }).catch(error => {
      window.alert("Erro ao editar usuário")
      console.log(error.message)
    })
  }

  render(){

    return (
      <FormContainer>
          <InputContainer>
            <Input
              placeholder={this.props.editMode ? this.props.userToEdit.name : "Nome" }
              value={this.state.nameValue}
              onChange={this.onChangeNameValue}
            />
          </InputContainer>
          <InputContainer>
            <Input
              placeholder={this.props.editMode ? this.props.userToEdit.email : "E-mail" }
              value={this.state.emailValue}
              onChange={this.onChangeEmailValue}
            />
          </InputContainer>
          <SaveIcon src={saveIcon} 
            onClick={this.props.editMode ? () => this.editUser(this.props.userToEdit.id) : this.createUser }/>
      </FormContainer>
    );
  }
}

export default SignUpForm;

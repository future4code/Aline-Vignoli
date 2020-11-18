import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import BaseForm from './BaseForm'
import { useHistory } from 'react-router-dom'

const FormsContainer = styled.section`
    display: flex;
`

const GoBackButton = styled.button`
    position: absolute;
    bottom: 20px;
    right: 60px;
`

const SignUpPage = () => {
    const history = useHistory()

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goBack = () => {
        history.goBack()
    }

    const signup = (email, password) => {
        const body = {
            email: email,
            password: password
        }

        console.log(email, password)

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/signup", body)
            .then(response => {
                goToLoginPage()
            }).catch(error => {
                console.log(error)
            })
    }

    return (
        <FormsContainer>
            <BaseForm 
                placeholder1="e-mail"
                placeholder2="senha"
                buttonText="Cadastrar"
                onClick={signup}
            />
            <GoBackButton onClick={goBack}>Voltar</GoBackButton>
        </FormsContainer>
    )
}

export default SignUpPage
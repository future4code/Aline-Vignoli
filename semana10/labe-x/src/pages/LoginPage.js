import React from 'react'
import styled from 'styled-components'
import BaseForm from '../components/BaseForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const FormsContainer = styled.section`
    display: flex;
    flex-direction: column;
`

const GoBackButton = styled.button`
    position: absolute;
    bottom: 20px;
    right: 60px;
`

const LoginPage = () => {
    const history = useHistory()

    const goToTripsPage = () => {
        history.push(`trips/list`)
    }

    const goBack = () => {
        history.goBack()
    }

    const login = (email, password) => {
        const body = {
            email: email,
            password: password
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/login", body)
            .then(response => {
                localStorage.setItem('token', response.data.token)
                goToTripsPage()
            }).catch(error => {
                console.log(error.message)
                window.alert("E-mail ou senha inválidos!")
            })
    }

    return (
        <FormsContainer>
            <BaseForm 
                placeholder1="e-mail"
                placeholder2="senha"
                buttonText="Entrar"
                onClick={login}
            />
            <GoBackButton onClick={goBack}>Voltar</GoBackButton>
        </FormsContainer>
    )
}

export default LoginPage
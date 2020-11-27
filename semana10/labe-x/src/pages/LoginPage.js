import React, { useState } from 'react'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl } from '../hooks/useRequestData'

const FormsContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LoginPage = () => {
    const history = useHistory()
    const [progress, setProgress] = useState(false)

    const goToTripsPage = () => {
        history.push(`trips`)
    }

    const login = (body) => {
        setProgress(true)
        axios.post(`${baseUrl}/login`, body)
            .then(response => {
                setProgress(false)
                localStorage.setItem('token', response.data.token)
                goToTripsPage()
            }).catch(error => {
                console.log(error.message)
                window.alert("E-mail ou senha inválidos!")
            })
    }

    return (
        <FormsContainer>
            {progress ? <progress/> :
            <LoginForm 
                placeholder1="E-mail"
                placeholder2="Senha"
                buttonText="Entrar"
                login={login}
            />}
        </FormsContainer>
    )
}

export default LoginPage
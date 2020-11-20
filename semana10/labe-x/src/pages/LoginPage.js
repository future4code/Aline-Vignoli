import React, { useState } from 'react'
import styled from 'styled-components'
import LoginForm from '../components/LoginForm'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

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
        history.push(`trips/list`)
    }

    const login = (body) => {
        setProgress(true)
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/login", body)
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
                placeholder1="e-mail"
                placeholder2="senha"
                buttonText="Entrar"
                login={login}
            />}
        </FormsContainer>
    )
}

export default LoginPage
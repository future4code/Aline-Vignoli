import React from 'react'
import styled from 'styled-components'
import BaseForm from './BaseForm'
import { useHistory } from 'react-router-dom'

const FormsContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #cdcdcd;
`

const GoBackButton = styled.button`
    position: absolute;
    bottom: 20px;
    right: 60px;
`

const LoginPage = () => {
    const history = useHistory()

    const goToTripsPage = (user) => {
        history.push(`trips/list/${user}`)
    }

    const goBack = () => {
        history.goBack()
    }

    return (
        <FormsContainer>
            <BaseForm 
                placeholder1="e-mail"
                placeholder2="senha"
                buttonText="Entrar"
                onClick={()=>goToTripsPage("admin")}
            />
            <GoBackButton onClick={goBack}>Voltar</GoBackButton>
        </FormsContainer>
    )
}

export default LoginPage
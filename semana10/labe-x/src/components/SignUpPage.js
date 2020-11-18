import React from 'react'
import styled from 'styled-components'
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

    return (
        <FormsContainer>
            <BaseForm 
                placeholder1="e-mail"
                placeholder2="senha"
                buttonText="Cadastrar"
                onClick={goToLoginPage}
            />
            <GoBackButton onClick={goBack}>Voltar</GoBackButton>
        </FormsContainer>
    )
}

export default SignUpPage
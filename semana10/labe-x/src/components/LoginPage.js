import React from 'react'
import styled from 'styled-components'
import BaseForm from './BaseForm'

const FormsContainer = styled.section`
    display: flex;
    background-color: #cdcdcd;
`

const LoginPage = () => {
    return (
        <FormsContainer>
            <BaseForm 
                placeholder1="e-mail"
                placeholder2="senha"
                buttonText="Enviar"
            />
        </FormsContainer>
    )
}

export default LoginPage
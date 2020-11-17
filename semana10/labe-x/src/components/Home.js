import React from 'react'
import styled from 'styled-components'
import BaseForm from './BaseForm'

const MainContainer = styled.section`
    display: flex;
`

const DescriptionSection = styled.section`
    background-color: blue;
    width: 50%;
    height: 100vh;
`

const FormsContainer = styled.section`
    background-color: #cdcdcd;
    width: 50%;
`

const Home = () => {
    return (
        <MainContainer>
            <DescriptionSection>
                Descrição breve
            </DescriptionSection>
            <FormsContainer>
                <BaseForm 
                    placeholder1="e-mail"
                    placeholder2="senha"
                    buttonText="Enviar"
                />
            </FormsContainer>
        </MainContainer>
    )
}

export default Home
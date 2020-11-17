import React from 'react'
import styled from 'styled-components'
import ButtonsContainer from './ButtonsContainer'

const MainContainer = styled.section`
    display: flex;
`

const DescriptionSection = styled.section`
    background-color: blue;
    width: 50%;
    height: 100vh;
`

const Home = () => {

    
    return (
        <MainContainer>
            <DescriptionSection>
                Descrição breve
            </DescriptionSection>
            <ButtonsContainer
                buttonText1="Fazer login"
                buttonText2="Cadastrar"
            />
        </MainContainer>
    )
}

export default Home
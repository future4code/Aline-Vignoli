import React from 'react'
import styled from 'styled-components'
import ButtonsContainer from './ButtonsContainer'
import { useHistory } from 'react-router-dom'

const MainContainer = styled.section`
    display: flex;
`

const DescriptionSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5%;
    background-color: blue;
    width: 50%;
    height: 100vh;
`

const Button = styled.button`
    font-size: 18px;
    padding: 20px;
`

const Home = () => {
    const history = useHistory()

    const goToTripsPage = () => {
        history.push("/trips/list")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToSignUpPage = () => {
        history.push("/signup")
    }

    return (
        <MainContainer>
            <DescriptionSection>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus est, congue vitae risus eu, iaculis auctor tortor. Quisque scelerisque, elit nec rhoncus fringilla, magna odio faucibus lorem, ac porttitor nibh augue ac metus. Vestibulum a enim dapibus, mollis justo tempus, pretium odio. Nullam faucibus elit eros, in tempor dui efficitur at. Morbi aliquam eros felis. Proin ac aliquet libero. Maecenas at risus ac lectus condimentum consequat ac a arcu.
                <Button onClick={goToTripsPage}>Ver viagens</Button>
            </DescriptionSection>
            <ButtonsContainer
                onClickButton1={goToLoginPage}
                onClickButton2={goToSignUpPage}
                buttonText1="Entrar como adiministrador"
                buttonText2="Cadastre-se"
            />
        </MainContainer>
    )
}

export default Home
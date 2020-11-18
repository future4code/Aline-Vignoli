import React from 'react'
import styled from 'styled-components'
import ButtonsContainer from './ButtonsContainer'
import { useHistory } from 'react-router-dom'
import spaceBanner from '../img/space-banner.jpg'

const MainContainer = styled.section`
    display: flex;
`

const DescriptionSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2%;
    background-color: rgba(222, 232, 248, 0.78);
    width: 50%;
    height: 100vh;
`

const UserSection = styled.section`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Button = styled.button`
    background-color: rgba(48, 77, 120, 0.78);
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    color: #FFF;
    font-size: 18px;
    padding: 20px;
    margin: 40px;
    &:hover {
        background-color: rgba(11, 26, 49, 0.78);
        cursor: pointer;
    }
`

const Img = styled.img`
    width: 100%;
`

const Home = () => {
    const history = useHistory()

    const goToTripsPage = (user) => {
        history.push(`/trips/list/${user}`)
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
            <Img src={spaceBanner} alt="imagem de viagem espacial" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus est, congue vitae risus eu, iaculis auctor tortor. Quisque scelerisque, elit nec rhoncus fringilla, magna odio faucibus lorem, ac porttitor nibh augue ac metus. Vestibulum a enim dapibus, mollis justo tempus, pretium odio. Nullam faucibus elit eros, in tempor dui efficitur at. Morbi aliquam eros felis. Proin ac aliquet libero. Maecenas at risus ac lectus condimentum consequat ac a arcu.</p>
            
            </DescriptionSection>
            <UserSection>
                <Button onClick={goToLoginPage}>Entrar como administrador</Button>
                <p>Não tem conta? Cadastre-se!</p>
                <ButtonsContainer
                    onClickButton1={goToSignUpPage}
                    onClickButton2={()=>goToTripsPage("visitor")}
                    buttonText1="Cadastrar"
                    buttonText2="Ver viagens"
                />
            </UserSection>
        </MainContainer>
    )
}

export default Home
import React from 'react'
import ButtonsGroup from '../../components/ButtonsGroup'
import { useHistory } from 'react-router-dom'
import spaceBanner from '../../img/space-banner.jpg'
import { MainContainer, DescriptionSection, UserSection, Img } from './styles'

const Home = () => {
    const history = useHistory()

    const goToTripsPage = () => {
        history.push(`/trips`)
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <MainContainer>
            <DescriptionSection>
            <Img src={spaceBanner} alt="imagem de viagem espacial" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tellus est, congue vitae risus eu, iaculis auctor tortor. Quisque scelerisque, elit nec rhoncus fringilla, magna odio faucibus lorem, ac porttitor nibh augue ac metus. Vestibulum a enim dapibus, mollis justo tempus, pretium odio. Nullam faucibus elit eros, in tempor dui efficitur at. Morbi aliquam eros felis. Proin ac aliquet libero. Maecenas at risus ac lectus condimentum consequat ac a arcu.</p>
            </DescriptionSection>
            <UserSection>
                <ButtonsGroup
                    onClickButton1={goToLoginPage}
                    onClickButton2={goToTripsPage}
                    buttonText1="Entrar como administrador"
                    buttonText2="Ver viagens"
                />
            </UserSection>
        </MainContainer>
    )
}

export default Home
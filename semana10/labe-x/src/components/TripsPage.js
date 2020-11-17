import React from 'react'
import { useHistory } from 'react-router-dom'
import ButtonsContainer from './ButtonsContainer'

//Renderizar condicionalmente administrador ou visitante
const TripsPage = () => {
    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push('/trips/create')
    }

    const signOut = () => {
        window.alert("Deslogou!")
    }

    return (
        <div>
            Página de viagens
            <ButtonsContainer
                buttonText1="Criar viagens"
                buttonText2="Sair"
                onClickButton1={goToCreateTripPage}
                onClickButton2={signOut}
            />
        </div>
    )
}

export default TripsPage
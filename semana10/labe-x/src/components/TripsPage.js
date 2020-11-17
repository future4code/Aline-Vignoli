import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import ButtonsContainer from './ButtonsContainer'
import  { useRequestData } from '../hooks/useRequestData'
import styled from 'styled-components'
import TripCard from './TripCard'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1em;
    align-items: center;
`

//Renderizar condicionalmente administrador ou visitante
const TripsPage = () => {
    const history = useHistory()
    const pathParams = useParams()
    const isAdmin = pathParams.user === "admin"
    const tripsData = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/trips', undefined)

    const goToCreateTripPage = () => {
        history.push('/trips/create')
    }

    const signOut = () => {
        window.alert("Deslogou!")
    }

    return (
        <div>
            {isAdmin ? <ButtonsContainer
                buttonText1="Criar viagens"
                buttonText2="Sair"
                onClickButton1={goToCreateTripPage}
                onClickButton2={signOut}
            />: 
            <ButtonsContainer
                buttonText1="Teste"
                buttonText2="Teste2"
                onClickButton1={goToCreateTripPage}
                onClickButton2={signOut}
            />}
            
            <Container>
                {tripsData && tripsData.trips.map((trip) => {
                    return (
                        <TripCard 
                            name={trip.name}
                            planet={trip.planet}
                            date={trip.date}
                            duration={`${trip.durationInDays} dias`}
                            isAdmin={isAdmin}
                        />
                    )})}
            </Container>
        </div>
    )
}

export default TripsPage
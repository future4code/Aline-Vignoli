import React from 'react'
import { useHistory } from 'react-router-dom'
import ButtonsGroup from '../../components/ButtonsGroup'
import  { useRequestData } from '../../hooks/useRequestData'
import TripCard from '../../components/tripCard/TripCard'
import { TripsCardContainer, Header, Title, Button } from './styles'

const TripsPage = () => {
    const history = useHistory()
    const tripsData = useRequestData('https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/trips', undefined)
    const token = localStorage.getItem('token')

    const goToCreateTripPage = () => {
        history.push('/trips/create')
    }

    const goToLoginPage = () => {
        history.push('/login')
    }

    const logOut = () => {
        localStorage.removeItem('token')
        history.replace('/')
    }

    return (
        <div>
            <Header>
                <Title>LabeX - Viagens Espaciais</Title>
                {token ? <ButtonsGroup
                    buttonText1="Criar viagens"
                    buttonText2="Sair"
                    onClickButton1={goToCreateTripPage}
                    onClickButton2={logOut}
                /> : 
                <Button onClick={goToLoginPage}>Entrar como administrador</Button>}
            </Header>
            <TripsCardContainer>
                {tripsData && tripsData.trips.map((trip) => {
                    return (
                        <TripCard 
                            key={trip.id}
                            id={trip.id}
                            name={trip.name}
                            planet={trip.planet}
                            date={trip.date}
                            duration={`${trip.durationInDays} dias`}
                        />
                    )})}
            </TripsCardContainer>
        </div>
    )
}

export default TripsPage
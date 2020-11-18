import React from 'react'
import { useHistory } from 'react-router-dom'
import ButtonsContainer from '../components/ButtonsContainer'
import  { useRequestData } from '../hooks/useRequestData'
import styled from 'styled-components'
import TripCard from '../components/TripCard'

const TripsCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1em;
    align-items: center;
`

const Header = styled.header`
    display: flex;
    padding: 10px;
    justify-content: flex-end;
`

const Button = styled.button`
    font-size: 18px;
    padding: 20px;
    margin: 10px;
    background-color: rgba(48, 77, 120, 0.78);
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    color: #FFF;
    &:hover {
        background-color: rgba(11, 26, 49, 0.78);
        cursor: pointer;
    }
`

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
                {token ? <ButtonsContainer
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
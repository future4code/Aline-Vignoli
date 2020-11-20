import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    font-family: 'Saira Extra Condensed', sans-serif;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    padding: 10px;
`
const TripInfo = styled.div`
    display: grid;
    padding: 10px;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    align-items: center;
`

const Tittle = styled.h3`
    text-align: center;
`

const StrongText = styled.h4`
    display: inline;
    margin: 0;
`

const Text = styled.p`
    display: block;
    margin: 0;
`

const Button = styled.button`
    font-family: 'Khand', sans-serif;
    font-size: 20px;
    padding: 20px;
    margin: 10px;
    background-color: #FFF;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    color: rgba(48, 77, 120, 0.78);
    &:hover {
        color: rgba(116, 143, 183, 0.78);
        border: 1px rgba(116, 143, 183, 0.78) solid;
        cursor: pointer;
    }
`

const TripCard = (props) => {
    const history = useHistory()
    const token = localStorage.getItem('token')

    const seeTripDetails = () => {
        history.push(`/trips/details/${props.id}`)
    }

    const applyToTripForm = () => {
        history.push(`/trips/apply-to-trip/${props.id}`)
    }

    return (
        <Card>
            <Tittle>{props.name}</Tittle>
            <TripInfo>
                <StrongText>Planeta:</StrongText><Text>{props.planet}</Text> 
                <StrongText>Data:</StrongText><Text>{props.date}</Text>
                <StrongText>Duração:</StrongText><Text>{props.duration}</Text>
            </TripInfo>
            <Button onClick={token ? seeTripDetails : applyToTripForm}>{token ? "Ver detalhes" : "Quero ir"}</Button>
        </Card>
    )
}
export default TripCard
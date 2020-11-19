import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Tittle = styled.h3`
    text-align: center;
`

const Button = styled.button`
    font-size: 18px;
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
            <img src="https://picsum.photos/200/200" alt="imagem" />
            <Tittle>{props.name}</Tittle>
            <p>Planeta: {props.planet}</p>
            <p>Data: {props.date}</p>
            <p>Duração: {props.duration}</p>
            <Button onClick={token ? seeTripDetails : applyToTripForm}>{token ? "Ver detalhes" : "Quero ir"}</Button>
        </Card>
    )
}
export default TripCard


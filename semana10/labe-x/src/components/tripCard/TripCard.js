import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, TripInfo, Title, StrongText, Text } from './styles'
import { SecondaryButton } from '../../styles/buttons'

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
            <Title>{props.name}</Title>
            <TripInfo>
                <StrongText>Planeta:</StrongText><Text>{props.planet}</Text> 
                <StrongText>Data:</StrongText><Text>{props.date}</Text>
                <StrongText>Duração:</StrongText><Text>{props.duration}</Text>
            </TripInfo>
            <SecondaryButton onClick={token ? seeTripDetails : applyToTripForm}>{token ? "Ver detalhes" : "Quero ir"}</SecondaryButton>
        </Card>
    )
}
export default TripCard
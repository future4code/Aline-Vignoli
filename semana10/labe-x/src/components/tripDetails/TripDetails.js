import React from 'react'
import axios from 'axios'
import { MainContainer, Content, Title, TripInfo, CandidatesSection, CadidateContainer, CandidateName, StrongText, Text, Button } from './styles'
import { baseUrl } from '../../hooks/useRequestData'

const TripDetails = (props) => {

    const decideCandidate = (candidateId, decision) => {
        const body = {
            approve: decision
        }

        axios
          .put(
            `${baseUrl}/trips/${props.tripId}/candidates/${candidateId}/decide`, body,
            {
              headers: {
                auth: localStorage.getItem("token")
              }
            }
        )
        .then(() => {
            const message = decision ? 'Candidato aprovado' : 'Candidato desaprovado'
            window.alert(message)
            props.getTripDetails()
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <MainContainer>
            <Title>{props.name}</Title>
            <Content>
                <TripInfo>
                    <StrongText>Descrição:</StrongText><Text>{props.description}</Text>
                    <StrongText>Planeta:</StrongText><Text>{props.planet}</Text>
                    <StrongText>Data:</StrongText><Text>{props.date}</Text>
                    <StrongText>Duração:</StrongText><Text>{props.duration}</Text> 
                </TripInfo>
                <CandidatesSection>
                <StrongText>Gerenciar candidaturas:</StrongText>
                    {props.candidates.map((candidate => {
                        return (
                            <CadidateContainer>
                                <CandidateName key={candidate.id}>{candidate.name}</CandidateName>
                                <Button onClick={()=> decideCandidate(candidate.id, true)}>aprovar</Button>
                                <Button onClick={()=> decideCandidate(candidate.id, false)}>desaprovar</Button>
                            </CadidateContainer>   
                        )
                    }))}
                </CandidatesSection>
            </Content>
        </MainContainer>
    )
}
export default TripDetails


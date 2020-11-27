import React from 'react'
import axios from 'axios'
import { MainContainer, Content, Title, TripInfo, CandidatesSection, CandidateContainer, ButtonsContainer, CandidateText, StrongText, Text, Button } from './styles'
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
                            <CandidateContainer key={candidate.id}>
                                <StrongText>{`${candidate.name} - ${candidate.profession}`}</StrongText>
                                <CandidateText>{`${candidate.age} anos, ${candidate.country}`}</CandidateText>
                                <CandidateText><i>{`"${candidate.applicationText}"`}</i></CandidateText>
                                <ButtonsContainer>
                                    <Button onClick={()=> decideCandidate(candidate.id, true)}>aprovar</Button>
                                    <Button onClick={()=> decideCandidate(candidate.id, false)}>desaprovar</Button> 
                                </ButtonsContainer>
                                <div><hr/></div>
                            </CandidateContainer>   
                        )
                    }))}
                </CandidatesSection>
            </Content>
        </MainContainer>
    )
}
export default TripDetails


import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const MainContainer = styled.div`
    font-family: 'Saira Extra Condensed', sans-serif;
    font-size: 22px;
    gap: 20px;
    padding: 30px 60px;    
    height: 100%;
`

const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

const Tittle = styled.h2`
    text-align: center;
`

const TripInfo = styled.div`
    width: 50%;
    justify-content: center;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    padding: 20px;
`

const CandidatesSection = styled.div`
    width: 50%;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    padding: 20px;
`

const CadidateContainer = styled.div`
    display: flex;
    
`

const CandidateName = styled.p`
    margin: 10px 0px;
`

const StrongText = styled.h4`
    display: inline;
`

const Text = styled.p`
    margin: 0 0 10px;
`

const Button = styled.button`
    font-family: 'Khand', sans-serif;
    font-size: 16px;
    padding: 5px;
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

const TripDetails = (props) => {

    const decideCandidate = (candidateId, decision) => {
        const body = {
            approve: decision
        }

        axios
          .put(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/trips/${props.tripId}/candidates/${candidateId}/decide`, body,
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
            <Tittle>{props.name}</Tittle>
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


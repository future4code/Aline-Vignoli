import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Card = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    padding: 20px;    
    height: 100%;
`

const Tittle = styled.h2`
    text-align: center;
`

const Img = styled.img`
    width: 40%;
    margin: auto;
`

const TripInfo = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const CandidateName = styled.p`
    display: inline;
`

const Button = styled.button`
    font-size: 12px;
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
        <Card>
            <Img src="https://picsum.photos/200/200" alt="imagem da viagem" />
            <TripInfo>
                <Tittle>{props.name}</Tittle>
                <p>Descrição: {props.description}</p>
                <p>Planeta: {props.planet}</p>
                <p>Data: {props.date}</p>
                <p>Duração: {props.duration}</p>
                <h4>Candidatos:</h4>
                {props.candidates.map((candidate => {
                    return (
                        <div>
                            <CandidateName key={candidate.id}>{candidate.name}</CandidateName>
                            <Button onClick={()=> decideCandidate(candidate.id, true)}>aprovar</Button>
                            <Button onClick={()=> decideCandidate(candidate.id, false)}>desaprovar</Button>
                        </div>   
                    )
                }))}
            </TripInfo>
        </Card>
    )
}
export default TripDetails


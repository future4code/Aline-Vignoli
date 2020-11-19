import React from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Form = styled.div`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    justify-content: center;
` 

const Input = styled.input`
    font-size: 18px;
    padding: 20px;
    border-radius: 5px;
`

const Button = styled.button`
    font-size: 18px;
    padding: 20px;
    background-color: rgba(48, 77, 120, 0.78);
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    color: #FFF;
    &:hover {
        background-color: rgba(11, 26, 49, 0.78);
        cursor: pointer;
    }
`

const CreateTripForm = () => {
    const [name, handleName] = useInput('')
    const [planet, handlePlanet] = useInput('')
    const [description, handleDescription] = useInput('')
    const [date, handleDate] = useInput('')
    const [duration, handleDuration] = useInput('')
    const history = useHistory()

    const createTrip = () => {
        const body = {
            name: name,
            planet: planet,
            date: date,
            description: description,
            durationInDays: duration
        }

        axios
          .post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/trips`, body,
            {
              headers: {
                auth: localStorage.getItem("token")
              }
            }
        )
        .then((response) => {
            window.alert("Viagem criada com sucesso!")
            history.push('/trips/list')
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <Form>
            <Input value={name} onChange={handleName} placeholder="Nome da viagem"/>
            <Input value={description} onChange={handleDescription} placeholder="Descrição"/>
            <Input value={planet} onChange={handlePlanet} placeholder="Planeta"/>
            <Input value={date} onChange={handleDate} placeholder="Data" type="date"/>
            <Input value={duration} onChange={handleDuration} placeholder="Duração (em dias)"/>
            <Button onClick={createTrip}>Criar viagem</Button>
        </Form>
    )
}

export default CreateTripForm
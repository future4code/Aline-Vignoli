import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import useForm from '../hooks/useForm'

const Form = styled.form`
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
    const [form, handleForm] = useForm({
        name: "",
        planet: "",
        description: "",
        date: "",
        durationInDays: ""
    })

    const history = useHistory()

    const createTrip = (body, headers) => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/trips`, body, headers)
        .then(() => {
            window.alert("Viagem criada com sucesso!")
            history.push('/trips/list')
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays
        }

        const requestHeaders = {
            headers: {
              auth: localStorage.getItem("token")
            }
        }

        createTrip(body, requestHeaders)
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <Input 
                required 
                name='name' 
                value={form.name} 
                onChange={handleForm} 
                placeholder="Nome da viagem"
            />
            <Input 
                required 
                name='description' 
                value={form.description} 
                onChange={handleForm} 
                placeholder="Descrição"
            />
            <Input 
                required 
                name='planet' 
                value={form.planet} 
                onChange={handleForm} 
                placeholder="Planeta"
            />
            <Input 
                required 
                name='date' 
                value={form.date} 
                onChange={handleForm} 
                placeholder="Data" 
                type="date"
            />
            <Input 
                required 
                name='durationInDays' 
                value={form.durationInDays} 
                onChange={handleForm} 
                placeholder="Duração (em dias)"
            />
            <Button>Criar viagem</Button>
        </Form>
    )
}

export default CreateTripForm
import React, { useState } from 'react'
import styled from 'styled-components'
import useForm from '../hooks/useForm'
import axios from 'axios'
import { useRequestData } from '../hooks/useRequestData'
import { useParams } from 'react-router-dom'

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

const Select = styled.select`
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

const ApplyToTripForm = () => {
    const pathParams = useParams()
    const [form, handleForm] = useForm({
        name: "",
        age: "",
        applicationText: "",
        profession: "",
        country: "Afeghanistan"
    })

    const countryArray = useRequestData('https://restcountries.eu/rest/v2/all', [])

    const applyToTrip = (body, headers) => {
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/aline-dumont/trips/${pathParams.id}/apply`, body, headers)
        .then(() => {
            window.alert("Sua candidatura foi enviada, entraremos em contato!")
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        const requestHeaders = {
            headers: {
              auth: localStorage.getItem("token")
            }
        }

        applyToTrip(body, requestHeaders)
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <Input name="name" value={form.name} onChange={handleForm} placeholder="Nome"/>
            <Input name="age" value={form.age} onChange={handleForm} placeholder="Idade"/>
            <Input name="applicationText" value={form.applicationText} onChange={handleForm} placeholder="Mensagem"/>
            <Input name="profession" value={form.profession} onChange={handleForm} placeholder="Profissão"/>
            <Select name="country" value ={form.country} onChange={handleForm}>
                {countryArray.map((element, id) => {
                    return <option key={id} value={element.name}>{element.name}</option>
                })}
            </Select>
            <Button>Candidatar-se</Button>
        </Form>
    )
}

export default ApplyToTripForm
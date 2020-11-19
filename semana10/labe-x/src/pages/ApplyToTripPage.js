import React, { useState } from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import axios from 'axios'
import { useRequestData } from '../hooks/useRequestData'

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
    const [name, handleName] = useInput('')
    const [age, handleAge] = useInput('')
    const [applicationText, handleApplicationText] = useInput('')
    const [profession, handleProfession] = useInput('')
    const [country, handleCountry] = useInput('Afeghanistan')
    const countryArray = useRequestData('https://restcountries.eu/rest/v2/all', [])

    const applyToTrip = () => {
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country
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
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <Form>
            <Input value={name} onChange={handleName} placeholder="Nome"/>
            <Input value={age} onChange={handleAge} placeholder="Idade"/>
            <Input value={applicationText} onChange={handleApplicationText} placeholder="Mensagem"/>
            <Input value={profession} onChange={handleProfession} placeholder="Profissão"/>
            <Select value ={country} onChange={handleCountry}>
                {countryArray.map((element, id) => {
                    return <option key={id} value={element.name}>{element.name}</option>
                })}
            </Select>
            <Button onClick={applyToTrip}>Candidatar-se</Button>
        </Form>
    )
}

export default ApplyToTripForm
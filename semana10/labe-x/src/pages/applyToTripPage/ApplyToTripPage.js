import React from 'react'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { baseUrl, useRequestData } from '../../hooks/useRequestData'
import { useHistory, useParams } from 'react-router-dom'
import { Form, Input, Select, Button } from '../../styles/formElementsStyles'

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
    const history = useHistory()

    const applyToTrip = (body, headers) => {
        axios.post(`${baseUrl}/trips/${pathParams.id}/apply`, body, headers)
        .then(() => {
            window.alert("Sua candidatura foi enviada, entraremos em contato!")
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
            <Input 
                required
                pattern='[a-zA-ZsÀ-ú ]{3,}'
                name="name" 
                value={form.name} 
                onChange={handleForm} 
                placeholder="Nome"
                type="text"
            />
            <Input 
                required
                name="age" 
                value={form.age} 
                onChange={handleForm} 
                placeholder="Idade"
                type="number"
                min="18"
            />
            <Input 
                required
                pattern='^.{30,}'
                name="applicationText" 
                value={form.applicationText} 
                onChange={handleForm} 
                placeholder="Mensagem"
                type="text"
            />
            <Input 
                required
                name="profession"
                pattern='^.{10,}' 
                value={form.profession} 
                onChange={handleForm} 
                placeholder="Profissão"
            />
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
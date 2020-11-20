import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { dateToString, dateFormat } from '../../util/dateFormat'
import { Form, Input, Select, Button } from '../../styles/formElementsStyles'
import { baseUrl } from '../../hooks/useRequestData'

const CreateTripForm = () => {
    const stringDate = dateToString(new Date())
    const planetsArray = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter", "Saturno", "Urano", "Netuno"]
    const [form, handleForm] = useForm({
        name: "",
        planet: planetsArray[0],
        description: "",
        date: stringDate,
        durationInDays: ""
    })
    const history = useHistory()

    const createTrip = (body, headers) => {
        axios.post(`${baseUrl}/trips`, body, headers)
        .then(() => {
            window.alert("Viagem criada com sucesso!")
            history.push('/trips')
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
            date: dateFormat(form.date),
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
                pattern='[a-zA-ZsÀ-ú ]{5,}'
                name='name' 
                value={form.name} 
                onChange={handleForm} 
                placeholder="Nome da viagem"
            />
            <Input 
                required 
                pattern='^.{30,}'
                name='description' 
                value={form.description} 
                onChange={handleForm} 
                placeholder="Descrição"
            />
            <Select name="planet" value ={form.planet} onChange={handleForm}>
                {planetsArray.map((planet, id) => {
                    return <option key={id} value={planet}>{planet}</option>
                })}
            </Select>
            <Input 
                required 
                name='date' 
                value={form.date} 
                onChange={handleForm} 
                placeholder="Data" 
                type="date"
                min={stringDate}
            />
            <Input 
                required 
                name='durationInDays' 
                value={form.durationInDays} 
                onChange={handleForm} 
                placeholder="Duração (em dias)"
                type="number"
                min="50"
            />
            <Button>Criar viagem</Button>
        </Form>
    )
}

export default CreateTripForm
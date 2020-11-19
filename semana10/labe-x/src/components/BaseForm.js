import React from 'react'
import styled from 'styled-components'
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

const BaseForm = (props) => {
    const [form, handleForm] = useForm({email: '', password: ''})

    const onSubmitForm = (event) => {
        event.preventDefault()
        const body = {
            email: form.email,
            password: form.password  
        }

        props.login(body)
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <Input  
                required
                name='email' 
                type='email' 
                value={form.email} 
                onChange={handleForm} 
                placeholder={props.placeholder1}
            />
            <Input 
                required
                name='password'    
                type='password' 
                value={form.password} 
                onChange={handleForm} 
                placeholder={props.placeholder2}
            />
            <Button>{props.buttonText}</Button>
        </Form>
    )
}

export default BaseForm
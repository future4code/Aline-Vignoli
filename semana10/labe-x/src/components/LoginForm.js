import React from 'react'
import useForm from '../hooks/useForm'
import { Form, Input, Button } from '../styles/formElementsStyles'

const LoginForm = (props) => {
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

export default LoginForm
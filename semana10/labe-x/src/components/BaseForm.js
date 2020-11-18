import React, { useState } from 'react'
import styled from 'styled-components'

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

//Texto dos botões condicionalmente (login ou signup)
const BaseForm = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <Form>
            <Input value={email} onChange={handleEmail} placeholder={props.placeholder1}/>
            <Input value={password} onChange={handlePassword} placeholder={props.placeholder2}/>
            <Button onClick={() =>props.onClick(email, password)}>{props.buttonText}</Button>
        </Form>
    )
}

export default BaseForm
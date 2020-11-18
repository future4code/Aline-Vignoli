import React from 'react'
import styled from 'styled-components'
import useInput from '../hooks/useInput'

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

const BaseForm = (props) => {
    const [email, handleEmail] = useInput()
    const [password, handlePassword] = useInput()

    return (
        <Form>
            <Input value={email} onChange={handleEmail} placeholder={props.placeholder1}/>
            <Input value={password} onChange={handlePassword} placeholder={props.placeholder2}/>
            <Button onClick={() =>props.onClick(email, password)}>{props.buttonText}</Button>
        </Form>
    )
}

export default BaseForm
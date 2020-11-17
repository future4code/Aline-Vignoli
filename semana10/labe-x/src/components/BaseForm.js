import React from 'react'
import styled from 'styled-components'

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
`

//Texto dos botões condicionalmente (login ou signup)
const BaseForm = (props) => {
    return (
        <Form>
            <Input placeholder={props.placeholder1}/>
            <Input placeholder={props.placeholder2}/>
            <Button>{props.buttonText}</Button>
        </Form>
    )
}

export default BaseForm
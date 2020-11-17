import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
` 

const Input = styled.input`
    padding: 10px;
    border-radius: 5px;
`

const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
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
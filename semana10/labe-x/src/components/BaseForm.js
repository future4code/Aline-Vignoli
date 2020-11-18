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
    return (
        <Form>
            <Input placeholder={props.placeholder1}/>
            <Input placeholder={props.placeholder2}/>
            <Button onClick={props.onClick}>{props.buttonText}</Button>
        </Form>
    )
}

export default BaseForm
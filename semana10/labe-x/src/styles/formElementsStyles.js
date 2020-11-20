import styled from 'styled-components'

export const Form = styled.form`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: auto;
    justify-content: center;
` 

export const Input = styled.input`
    font-family: 'Khand', sans-serif;
    font-size: 20px;
    padding: 20px;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    color: rgba(11, 26, 49, 0.78);
`

export const Select = styled.select`
    font-family: 'Khand', sans-serif;
    font-size: 20px;
    padding: 20px;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    color: rgba(11, 26, 49, 0.78);
`

export const Button = styled.button`
    font-family: 'Khand', sans-serif;
    font-size: 20px;
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
import styled from 'styled-components'

export const PrimaryButton = styled.button`
    font-family: 'Khand', sans-serif;
    font-size: 20px;
    padding: 20px;
    margin: 10px;
    background-color: rgba(48, 77, 120, 0.78);
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    color: #FFF;
    &:hover {
        background-color: rgba(11, 26, 49, 0.78);
        cursor: pointer;
    }
`

export const SecondaryButton = styled.button`
    font-family: 'Khand', sans-serif;
    font-size: 20px;
    padding: 20px;
    margin: 10px;
    background-color: #FFF;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    color: rgba(48, 77, 120, 0.78);
    &:hover {
        color: rgba(116, 143, 183, 0.78);
        border: 1px rgba(116, 143, 183, 0.78) solid;
        cursor: pointer;
    }
`
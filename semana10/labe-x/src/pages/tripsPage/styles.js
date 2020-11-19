import styled from 'styled-components'

export const TripsCardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1em;
    align-items: center;
`

export const Header = styled.header`
    display: flex;
    padding: 10px;
    justify-content: flex-end;
`

export const Button = styled.button`
    font-size: 18px;
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
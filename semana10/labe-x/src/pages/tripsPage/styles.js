import styled from 'styled-components'

export const TripsCardContainer = styled.div`
    display: grid;
    padding: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
`

export const Header = styled.header`
    display: flex;
    padding: 10px;
    justify-content: space-between;
`

export const Title = styled.h1`
    color: rgba(48, 77, 120, 0.78);
    font-family: 'Saira Extra Condensed', sans-serif;
    font-size: 60px;
    margin: auto 10px;
`

export const Button = styled.button`
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
import styled from 'styled-components'

export const Card = styled.div`
    font-family: 'Saira Extra Condensed', sans-serif;
    font-size: 22px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    padding: 10px;
`
export const TripInfo = styled.div`
    display: grid;
    padding: 10px;
    grid-template-columns: 1fr 1fr;
    width: 70%;
    align-items: center;
`

export const Title = styled.h3`
    text-align: center;
`

export const StrongText = styled.h4`
    display: inline;
    margin: 0;
`

export const Text = styled.p`
    display: block;
    margin: 0;
`
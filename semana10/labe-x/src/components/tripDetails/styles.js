import styled from 'styled-components'

export const MainContainer = styled.div`
    font-family: 'Saira Extra Condensed', sans-serif;
    font-size: 22px;
    gap: 20px;
    padding: 30px 60px;    
    height: 100%;
`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const Title = styled.h2`
    text-align: center;
`

export const TripInfo = styled.div`
    width: 50%;
    justify-content: center;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    padding: 20px;
`

export const CandidatesSection = styled.div`
    width: 50%;
    border: 1px rgba(48, 77, 120, 0.78) solid;
    border-radius: 5px;
    padding: 20px;
`

export const CandidateContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const CandidateText = styled.p`
    margin: 0;
`

export const StrongText = styled.h4`
    display: inline;
    margin: 0;
`

export const Text = styled.p`
    margin: 0 0 10px;
`

export const Button = styled.button`
    font-family: 'Khand', sans-serif;
    font-size: 16px;
    padding: 5px;
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
import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
`

const PrimaryButton = styled.button`
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

const SecondaryButton = styled.button`
    font-size: 18px;
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

const ButtonsContainer = (props) => {
    return (
        <MainContainer>
            <PrimaryButton onClick={props.onClickButton1}>{props.buttonText1}</PrimaryButton>
            <SecondaryButton onClick={props.onClickButton2}>{props.buttonText2}</SecondaryButton>
        </MainContainer>
    )
}

export default ButtonsContainer
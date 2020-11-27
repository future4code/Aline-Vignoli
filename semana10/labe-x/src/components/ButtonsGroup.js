import React from 'react'
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from '../styles/buttons'

const MainContainer = styled.div`
    display: flex;
`

const ButtonsGroup = (props) => {
    return (
        <MainContainer>
            <PrimaryButton onClick={props.onClickButton1}>{props.buttonText1}</PrimaryButton>
            <SecondaryButton onClick={props.onClickButton2}>{props.buttonText2}</SecondaryButton>
        </MainContainer>
    )
}

export default ButtonsGroup
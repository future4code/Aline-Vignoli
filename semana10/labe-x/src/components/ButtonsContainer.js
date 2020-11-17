import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    margin: auto;
`

const Button = styled.button`
    font-size: 18px;
    padding: 20px;
    margin: 20px;
`

const ButtonsContainer = (props) => {
    return (
        <MainContainer>
            <Button onClick={props.onClickButton1}>{props.buttonText1}</Button>
            <Button onClick={props.onClickButton2}>{props.buttonText2}</Button>
        </MainContainer>
    )
}

export default ButtonsContainer
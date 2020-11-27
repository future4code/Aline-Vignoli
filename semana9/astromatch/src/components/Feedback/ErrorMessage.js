import React from 'react'
import styled from 'styled-components'

const ErrorMessageContainer = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 20px;
`

const ErrorMessage = (props) => {

    return (
        <ErrorMessageContainer>
            <h3>{props.title}</h3>
            <p>{props.subTitle}</p>
        </ErrorMessageContainer>
    )
}

export default ErrorMessage

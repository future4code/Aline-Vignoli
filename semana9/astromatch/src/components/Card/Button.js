import React from 'react'
import styled from 'styled-components'

const RoundButton = styled.button`
    border-radius: 50%;
    height: 90px;
    width: 90px;
`

const Button = (props) => {
  return (
    <RoundButton onClick={props.onClick}>{props.buttonText}</RoundButton>
  );
}

export default Button;

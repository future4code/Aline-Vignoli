import React from 'react'
import styled from 'styled-components'

const RoundButton = styled.button`
    border-radius: 50%;
    height: 90px;
    width: 90px;
`

const RoundSmallButton = styled.button`
    border-radius: 50%;
    height: 60px;
    width: 60px;
`

export const Button = (props) => {
  return (
    <RoundButton 
      onClick={() => props.onClick(props.id, props.isMatch)}
    >{props.buttonText}</RoundButton>
  );
}

export const SmallButton = (props) => {
  return (
    <RoundSmallButton 
      onClick={props.onClick}
    >{props.buttonText}</RoundSmallButton>
  );
}

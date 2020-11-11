import React from 'react'
import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

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
    <IconButton 
      size="medium"
      onClick={() => props.onClick(props.id, props.isMatch)}
    >{props.buttonIcon}</IconButton>
  );
}

export const SmallButton = (props) => {
  return (
    <IconButton 
      onClick={props.onClick}
    >{props.buttonIcon}</IconButton>
  );
}
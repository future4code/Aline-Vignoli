import React from 'react'
import { IconButton, Tooltip } from '@material-ui/core'

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
    <Tooltip title={props.tooltip}>
      <IconButton 
        onClick={props.onClick}
      >{props.buttonIcon}</IconButton>
    </Tooltip>
  );
}
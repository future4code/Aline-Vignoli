import React from 'react'
import styled from 'styled-components'

const CustomListContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 400px;
    width: 360px;
    overflow: auto;

    //Custom Scroll
    /* width */
    ::-webkit-scrollbar {
        width: 12px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 5px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(242, 27, 106, 0.7); 
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #F21B6A; 
}
`

const ListContainer = (props) => {

  return (
    <CustomListContainer>
      {props.content}
    </CustomListContainer>
  )
}

export default ListContainer

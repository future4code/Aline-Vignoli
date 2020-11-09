import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Header from '../Header'
import Profile from './Profile'
import Button from './Button'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  background-color: #FFF;
  align-items: center;
`

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: space-evenly;
`

const Card = (props) => {

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-vignoli/person"
  
  const [profile, setProfile] = useState({})

  // useEffect(() => {
  //   axios.get(baseUrl).then(response=> {
  //     return response.data.profile
  //   }).catch(error => {
  //     console.log(error.message)
  //   })
  // })

  return (
    <CardContainer>
      <Header/>
      <Profile 
        photo={"https://picsum.photos/200/300"}
        name="Aline"
        age="32"
        bio="Minha descrição blablab asdjajsdasd asd aisjdasd asduhuhasd adsada"
      />
      <ButtonsContainer>
        <Button buttonText="see matches"/>
        <Button buttonText="pass"/>
        <Button buttonText="like"/>
      </ButtonsContainer>
    </CardContainer>
  );
}

export default Card;

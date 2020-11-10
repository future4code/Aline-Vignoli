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

  const [profile, setProfile] = useState({})
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-vignoli/person"

  const getProfileToChoose = () => {
    axios.get(baseUrl).then(response=> {
      setProfile(response.data.profile) 
    }).catch(error => {
      console.log(error.message)
    })
  }

  useEffect(() => {
    getProfileToChoose()
  },[])

  return (
    <CardContainer>
      <Header/>
      <Profile 
        photo={profile.photo}
        name={profile.name}
        age={profile.age}
        bio={profile.bio}
      />
      <ButtonsContainer>
        <Button buttonText="see matches"/>
        <Button onClick={getProfileToChoose} buttonText="pass"/>
        <Button onClick={getProfileToChoose} buttonText="like"/>
      </ButtonsContainer>
    </CardContainer>
  );
}

export default Card;

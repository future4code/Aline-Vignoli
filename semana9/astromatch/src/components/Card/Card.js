import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Profile from './Profile'
import { Button, SmallButton } from './Button'

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  align-items: center;
  justify-content: space-evenly;
`

const Card = (props) => {

  const [profile, setProfile] = useState({})
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-vignoli"

  const getProfileToChoose = () => {
    axios.get(`${baseUrl}/person`).then(response=> {
      setProfile(response.data.profile) 
    }).catch(error => {
      console.log(error.message)
    })
  }

  const choosePerson = (id, isMatch) => {
    const body = {
      id: id,
      choice: isMatch
    }

    axios.post(`${baseUrl}/choose-person`, body ).then(()=> {
      getProfileToChoose()
    }).catch(error => {
      console.log(error.message)
    })
  }

  useEffect(() => {
    getProfileToChoose()
  },[])

  return (
    <div>
      <Profile 
        photo={profile.photo}
        name={profile.name}
        age={profile.age}
        bio={profile.bio}
      />
      <ButtonsContainer>
        <SmallButton onClick={props.changePage} buttonText="matches"/>
        <Button onClick={choosePerson} isMatch={false} id={profile.id} buttonText="pass"/>
        <Button onClick={choosePerson} isMatch={true} id={profile.id} buttonText="like"/>
      </ButtonsContainer>
    </div>
  );
}

export default Card;

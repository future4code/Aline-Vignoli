import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Profile from './Profile'
import { Button, SmallButton } from './Button'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CloseRounded from '@material-ui/icons/CloseRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';

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
    axios.get(`${baseUrl}/person`).then(response => {
      console.log(response.data.profile)
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

  const iconMatches = <GroupRoundedIcon fontSize="small" color="info"/>
  const iconFavorite = <FavoriteRoundedIcon fontSize="large" color="primary"/>
  const iconPass = <CloseRounded fontSize="large" color="secondary"/>

  return (
    <div>
      <Profile 
        photo={profile.photo}
        name={profile.name}
        age={profile.age}
        bio={profile.bio}
      />
      <ButtonsContainer>
        <SmallButton onClick={props.changePage} buttonIcon={iconMatches} tooltip="ver matches"/>
        <Button onClick={choosePerson} isMatch={false} id={profile.id} buttonIcon={iconPass}/>
        <Button onClick={choosePerson} isMatch={true} id={profile.id} buttonIcon={iconFavorite}/>
      </ButtonsContainer>
    </div>
  );
}

export default Card;

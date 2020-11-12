import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Profile from './Profile'
import { Button, SmallButton } from './Button'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import CloseRounded from '@material-ui/icons/CloseRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import CustomSnackbar from '../Feedback/CustomSnackbar'
import CircularProgress from '../Feedback/CircularProgress';

const ErrorMessageContainer = styled.div`
  padding: 20px;
  text-align: center;
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
  const [isMatch, setIsMatch] = useState(false);
  const [inProgress, setInProgress] = useState(false);
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-vignoli"

  const getProfileToChoose = () => {
    setInProgress(true)
    axios.get(`${baseUrl}/person`).then(response => {
      setInProgress(false)
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

    axios.post(`${baseUrl}/choose-person`, body ).then((response)=> {
      setIsMatch(response.data.isMatch)
      getProfileToChoose()
    }).catch(error => {
      console.log(error.message)
    })
  }

  useEffect(() => {
    getProfileToChoose()
  },[])

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsMatch(false);
  };

  const iconMatches = <GroupRoundedIcon fontSize="small" color="info"/>
  const iconFavorite = <FavoriteRoundedIcon fontSize="large" color="primary"/>
  const iconPass = <CloseRounded fontSize="large" color="secondary"/>
  const mainContent = ( 
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
      <CustomSnackbar isMatch={isMatch} handleClose={handleCloseSnackbar}/>
    </div>
  )

  return (
    profile !== null ?
    <div>
      {inProgress ? <CircularProgress/> : mainContent}
    </div> : 
    <ErrorMessageContainer>
      <h3>Ops! Você atingiu o limite de matches!</h3>
      <p>Que tal limpar sua lista?</p>
      <SmallButton onClick={props.changePage} buttonIcon={iconMatches} tooltip="ver matches"/>
    </ErrorMessageContainer>
  );
}

export default Card;

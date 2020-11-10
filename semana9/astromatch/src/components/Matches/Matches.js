import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { SmallButton } from '../Card/Button'

const Matches = (props) => {

  const [matches, setMatches] = useState([])
  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-vignoli"

  const getMatches = () => {
    axios.get(`${baseUrl}/matches`).then(response=> {
        setMatches(response.data.matches)
    }).catch(error => {
        console.log(error.message)
    })
  }

  useEffect(() => {
    getMatches()
  },[])

  return (
    <div>
        <SmallButton onClick={props.changePage} buttonText="ver perfils"/>
        {matches.map((profile => {
            return (<p key={profile.id}>{profile.name}</p>)
        }))}
    </div>
  );
}

export default Matches;

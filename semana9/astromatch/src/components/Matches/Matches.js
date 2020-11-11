import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { SmallButton } from '../Card/Button'
import IconButton from '@material-ui/core/IconButton';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';

const Matches = (props) => {

    const [matches, setMatches] = useState([])
    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-vignoli"

    const getMatches = () => {
        axios.get(`${baseUrl}/matches`).then(response=> {
            console.log(response.data.matches)
            setMatches(response.data.matches)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const clear = () => {
        axios.put(`${baseUrl}/clear`).then(response => {
            window.alert("Lista limpa")
            getMatches()
        }).catch(error => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        getMatches()
        console.log(matches)
    },[])

    const iconFavorite = <FavoriteRoundedIcon fontSize="large" color="primary"/>

    return (
        <div>
            <SmallButton onClick={props.changePage} buttonIcon={iconFavorite}/>
            <SmallButton onClick={clear} buttonIcon="limpar matches"/>
            {matches.map((profile => {
                return (<p key={profile.id}>{profile.name}</p>)
            }))}
        </div>
    );
}

export default Matches;

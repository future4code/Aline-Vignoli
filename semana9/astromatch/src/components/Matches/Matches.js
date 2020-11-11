import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { SmallButton } from '../Card/Button'
import HomeIcon from '@material-ui/icons/Home';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import ListItem from './ListItemCard'

const ListContainer = styled.div`
    height: 400px;
    overflow: auto;
`

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

    const iconHome = <HomeIcon fontSize="large" color="primary"/>
    const iconDelete = <DeleteSweepIcon fontSize="large" color="secondary"/>

    return (
        <div>
            <SmallButton onClick={props.changePage} buttonIcon={iconHome} tooltip=""/>
            <SmallButton onClick={clear} buttonIcon={iconDelete} tooltip="limpar matches"/>
            <ListContainer>
                {matches.map((profile => {
                    return (<ListItem key={profile.id} name={profile.name} age={profile.age} photo={profile.photo}/>)
                }))}
            </ListContainer>
        </div>
    );
}

export default Matches;

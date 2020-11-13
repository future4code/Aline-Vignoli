import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { SmallButton } from '../Card/Button'
import HomeIcon from '@material-ui/icons/Home'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'
import ListItem from './ListItemCard'
import CircularProgress from '../Feedback/CircularProgress'
import ErrorMessage from '../Feedback/ErrorMessage'
import ListContainer from '../Matches/ListContainer'

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonsContainer = styled.div`
    display: flex; 
`

const Matches = (props) => {

    const [matches, setMatches] = useState([])
    const [inProgress, setInProgress] = useState(false)
    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/aline-vignoli"

    const getMatches = () => {
        setInProgress(true)
        axios.get(`${baseUrl}/matches`).then(response=> {
            setInProgress(false)
            setMatches(response.data.matches)
        }).catch(error => {
            console.log(error.message)
        })
    }

    const clear = () => {
        axios.put(`${baseUrl}/clear`).then(() => {
            window.alert("Sua lista de matches foi resetada!")
            getMatches()
        }).catch(error => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        getMatches()
    },[])

    const iconHome = <HomeIcon fontSize="large" color="primary"/>
    const iconDelete = <DeleteSweepIcon fontSize="large" color="secondary"/>
    const renderedMatches = matches.map((profile => {
        return (
            <ListItem 
                id={profile.id}
                key={profile.id} 
                name={profile.name} 
                age={profile.age} 
                photo={profile.photo}
            />
        )
    }))
    const mainContent = ( 
        <MainContainer>
            <ListContainer 
                content={renderedMatches.length!==0 ? 
                    renderedMatches : 
                    <ErrorMessage 
                        title="Você ainda não encontrou matches :(" 
                        subTitle="Que tal ver se encontra uma pessoa interessante? (:"
                    />
                }>
                
            </ListContainer>
            <ButtonsContainer>
                <SmallButton onClick={props.changePage} buttonIcon={iconHome} tooltip=""/>
                {renderedMatches.length!==0 ?
                    <SmallButton onClick={clear} buttonIcon={iconDelete} tooltip="limpar matches"/> : null        
                }
            </ButtonsContainer>
        </MainContainer>
    )

    return (
        <div>
            {inProgress ? <CircularProgress/> : mainContent}
        </div>
    );
}

export default Matches
import React, { useContext, useEffect } from 'react'

import {ButtonsContainer} from "./styles"

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import { useHistory } from 'react-router-dom';
import { goToFeed, goToLogin, goBack } from '../../routes/coordinator';

const MainAppBar = (props) => {
    const history = useHistory()
    const token = localStorage.getItem("token")

    const handleLoginOrLogoutClick = () => {
      if (token) {
        localStorage.removeItem("token")
        goToLogin(history)
      }
    }

    return (
        <AppBar>
          <Toolbar>
            <ButtonsContainer>
              <Button color="inherit" onClick={() => goToFeed(history)}>LabEddit</Button>
              { !props.isPosting && 
                <Button color="inherit" 
                  onClick={props.isFeedPage ? props.postAction : ()=> goBack(history)}>
                  {props.isFeedPage ? "Publicar" : "Voltar"}
              </Button>}
              <Button color="inherit" onClick={handleLoginOrLogoutClick}>
                {token ? "Logout" : "Login"}
              </Button>
            </ButtonsContainer>
          </Toolbar>
        </AppBar>
    )
}

export default MainAppBar
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Card from './components/Card/Card'
import Matches from './components/Matches/Matches'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { dark } from '@material-ui/core/styles/createPalette'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#A173BF",
      dark: "#301840"
    },
    secondary: {
      main: "#F21B6A",
    },
  },
});

const MainContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #CDCDCD;
  align-items: center;
  justify-content: center;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  background-color: #FFF;
  align-items: center;
`

function App() {

  const [isProfilePage, setIsProfilePage] = useState(true)

  const changePage = () => {
    setIsProfilePage(!isProfilePage)
  }

  return (
    <MuiThemeProvider theme={theme}>
      <MainContainer>
      <CardContainer>
      <Header/>
      {isProfilePage ? <Card changePage={changePage}/> : <Matches changePage={changePage}/> } 
      </CardContainer>
    </MainContainer>
    </MuiThemeProvider>    
  );
}

export default App;

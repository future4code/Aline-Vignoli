import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Card from './components/Card/Card'
import Matches from './components/Matches/Matches'
import Theme from './design_system/Theme'

const MainContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  
  font-family: 'Asap Condensed', Arial, Helvetica, sans-serif;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: rgba(176,196,222, 0.1);
  align-items: center;
  justify-content: center;
`

const CardContainer = styled.div`
  border-radius: 5px;
  box-shadow: 1px 1px 8px #000;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  background-color: #FFF;
  align-items: center;
`

const App = () => {

  const [isProfilePage, setIsProfilePage] = useState(true)

  const changePage = () => {
    setIsProfilePage(!isProfilePage)
  }

  const mainContent = ( 
    <MainContainer>
      <CardContainer>
      <Header/>
      {isProfilePage ? <Card changePage={changePage}/> : <Matches changePage={changePage}/>} 
      </CardContainer>
    </MainContainer>
  )

  return (
    <Theme content={mainContent}/>
  );
}

export default App

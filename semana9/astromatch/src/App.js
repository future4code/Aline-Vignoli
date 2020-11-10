import React from 'react'
import styled from 'styled-components'
import Card from './components/Card/Card'

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

function App() {
  return (
    <MainContainer>
      <Card/>
    </MainContainer>
  );
}

export default App;

import React from 'react';
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './constants/theme';
import styled from 'styled-components';

const App = () => {

  const Container = styled.div`
    /* padding-top: 2%; */
  `

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router/>
      </Container>
    </ThemeProvider> 
  );
}

export default App;
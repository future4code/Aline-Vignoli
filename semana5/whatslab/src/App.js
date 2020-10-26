import React from 'react';
import './App.css';
import FormularioMensagem from './components/FormularioMensagem';
import styled from 'styled-components';

const DivContainer = styled.div `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50vw;
  height: 100vh;
  border: 1px solid black;
  padding: 10px;
  margin: auto;
`

const ContainerLista = styled.div`
  flex-grow: 1
` 

function App() {
  return (
    <DivContainer>
      <ContainerLista/>
      <FormularioMensagem/>
    </DivContainer>
  );
}

export default App;

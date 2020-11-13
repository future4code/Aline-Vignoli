import React from 'react'
import styled from 'styled-components'
import astroLove from '../assets/astro-love.jpg'

const MainContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  text-align: center;
  padding: 20px;
`

const Logo = styled.img`
  border-radius: 80px;
  width: 80px;
`

const Astro = styled.h1`
  margin-right: 0;
  display:inline;
  color:#A173BF;
`

const Match = styled.h1`
  margin-left: 0;
  color:#CC94F2;
`

const Header = () => {
  return (
    <MainContainer>
      <Logo src={astroLove} alt="logo"/>
      <Astro>a s t r o</Astro>
      <Match>m a t c h</Match>
    </MainContainer>
  );
}

export default Header

import React from 'react'
import styled from 'styled-components'
import astroLove from '../assets/astro-love.jpg'
import astroMatchFont from '../assets/astromatch-font.png'


const MainContainer = styled.div`
  font-family: 'Secular One', cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 20px;
`

const Logo = styled.img`
  border-radius: 90px;
  width: 90px;
`

const Title = styled.img`
  height: 72px;
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
      <Title src={astroMatchFont}/>
    </MainContainer>
  );
}

export default Header

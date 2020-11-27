import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  position: relative;
  width: 350px;
  height: 400px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: rgba(70, 1, 159, 0.4);
  width: 100%;
  position: absolute;
  bottom: 0;
  color: #FFF;
  text-shadow: 0px 0px 2px black;
`

const Image = styled.img`
  border-radius: 5px;
  width: 100%;
`

const TitleContainer = styled.div`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.4);
`

const BioContainer = styled.div`
  font-size: 18px;
  padding: 5px 10px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`

const Title = styled.h3`
  display: inline;
`

const Profile = (props) => {
  return (
    <Container>
      <Image src={props.photo} alt="foto de perfil"/>
      <Info>
        <TitleContainer>
          <Title>{props.name}, </Title>
          <Title>{props.age}</Title>
        </TitleContainer>
        <BioContainer>
          <p>{props.bio}</p>
        </BioContainer>
      </Info>
    </Container>
  );
}

export default Profile;
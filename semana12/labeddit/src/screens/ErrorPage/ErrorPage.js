import React from 'react';
import { MainContainer, Img, ErrorMessage } from '../../global/global-styles';
import errorRobot from '../../assets/error-robot.png';

const ErrorPage = () => {
    return (
        <MainContainer>
            <ErrorMessage>404 - Ops! Página não encontrada :(</ErrorMessage>
            <Img src={errorRobot} alt="página não encontrada"/>
        </MainContainer>
    )
}

export default ErrorPage;
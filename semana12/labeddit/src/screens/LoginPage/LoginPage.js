import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { MainContainer } from '../../global/global-styles';
import { useRedirectUser } from '../../hooks/useRedirectUser';

const LoginPage = () => {
    useRedirectUser()

    return (
        <MainContainer>
            <LoginForm/>
        </MainContainer>
    )
}

export default LoginPage;
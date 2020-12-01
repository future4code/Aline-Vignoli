import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { FlexBox } from '../../global/global-styles';
import { useRedirectUser } from '../../hooks/useRedirectUser';

const LoginPage = () => {
    useRedirectUser()

    return (
        <FlexBox>
            <LoginForm/>
        </FlexBox>
    )
}

export default LoginPage;
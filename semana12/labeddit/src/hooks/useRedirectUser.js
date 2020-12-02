import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../routes/coordinator';
import { goToFeed } from '../routes/coordinator';

export const useRedirectUser = () => {
    const history = useHistory()

    useEffect(()=> {
        localStorage.getItem("token") ? goToFeed(history) : goToLogin(history)
    }, [history])
}
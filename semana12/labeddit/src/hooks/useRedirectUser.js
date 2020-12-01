import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../routes/coordinator';
import { goToFeed } from '../routes/coordinator';
import { TOKEN } from '../constants/requestConfig';

export const useRedirectUser = () => {
    const history = useHistory()

    useEffect(()=> {
        TOKEN ? goToFeed(history) : goToLogin(history)
    }, [history])
}
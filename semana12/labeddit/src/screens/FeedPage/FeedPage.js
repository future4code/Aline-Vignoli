import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';

const FeedPage = () => {
    const token = localStorage.getItem("token")
    const history = useHistory()

    useEffect(()=> {
        redirectUser()
    }, [])

    const redirectUser = () => {
        !token && goToLogin(history)
    }

    return (
        <div>Feed Page</div>
    )
}

export default FeedPage;
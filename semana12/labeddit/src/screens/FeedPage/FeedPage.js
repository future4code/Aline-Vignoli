import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';
import PostForm from '../../components/PostComponents/PostForm/PostForm';

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
        <div>
            <PostForm/>
        </div>
    )
}

export default FeedPage;
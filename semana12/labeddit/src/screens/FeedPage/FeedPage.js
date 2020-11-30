import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';
import PostForm from '../../components/PostComponents/PostForm/PostForm';

const FeedPage = () => {
    const token = localStorage.getItem("token")
    const history = useHistory()
    const [isPosting, setIsPosting] = useState(false)

    useEffect(()=> {
        redirectUser()
    }, [])

    const redirectUser = () => {
        !token && goToLogin(history)
    }

    const handleIsPosting = () => {
        setIsPosting(!isPosting)
    }

    return (
        <div>
            {isPosting ? 
            <PostForm 
                handleIsPosting={handleIsPosting}
            /> : 
            <button onClick={handleIsPosting}>postar</button>}
        </div>
    )
}

export default FeedPage;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';
import PostForm from '../../components/PostComponents/PostForm/PostForm';
import { Button } from '@material-ui/core';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url';

const FeedPage = () => {
    const token = localStorage.getItem("token")
    const requestHeaders = {
        headers: {
          Authorization: token
        }
    }
    const history = useHistory()
    const [isPosting, setIsPosting] = useState(false)
    const feedData = useRequestData(`${BASE_URL}/posts`, requestHeaders, undefined)
    

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
            <Button onClick={handleIsPosting} variant="contained">postar</Button>}
            {feedData && feedData.posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.text}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FeedPage;
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/coordinator';
import PostForm from '../../components/PostComponents/PostForm/PostForm';
import { Button } from '@material-ui/core';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/url';
import PostCard from '../../components/PostComponents/PostCard/PostCard';
import { FlexBox } from '../../global/global-styles';

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
        <FlexBox>
            {isPosting ? 
            <PostForm 
                handleIsPosting={handleIsPosting}
            /> : 
            <div>
                <Button onClick={handleIsPosting} variant="contained">postar</Button>
            </div>}
            {feedData && feedData.posts.map((post) => {
                return (
                    <PostCard 
                        key={post.id}
                        title={post.title}
                        text={post.text}
                    />
                )
            })}
        </FlexBox>
    )
}

export default FeedPage;
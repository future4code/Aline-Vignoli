import React, { useState } from 'react';
import PostForm from '../../components/PostComponents/PostForm/PostForm';
import { Button } from '@material-ui/core';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL, HEADERS } from '../../constants/requestConfig';
import PostCard from '../../components/PostComponents/PostCard/PostCard';
import { FlexBox } from '../../global/global-styles';
import { useRedirectUser } from '../../hooks/useRedirectUser';
import CircularProgress from '@material-ui/core/CircularProgress';

const FeedPage = () => {
    useRedirectUser()

    const headers = { 
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }

    const [isPosting, setIsPosting] = useState(false)
    const { data, getData }  = useRequestData(`${BASE_URL}/posts`, headers, undefined)

    const handleIsPosting = () => {
        setIsPosting(!isPosting)
    }

    return (
        <FlexBox>
            {isPosting ? 
            <PostForm 
                upDate={getData}
                handleIsPosting={handleIsPosting}
            /> : 
            <div>
                <Button onClick={handleIsPosting} variant="contained" color="secondary">postar</Button>
            </div>}
            {!data && <CircularProgress color="primary"/>}
            {data && data.posts.map((post) => {
                return (
                    <PostCard 
                        upDate={getData}
                        isFeedPage
                        key={post.id}
                        post={post}
                    />
                )
            })}
        </FlexBox>
    )
}

export default FeedPage;
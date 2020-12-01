import React, { useContext, useState } from 'react';
import PostForm from '../../components/PostComponents/PostForm/PostForm';
import { Button } from '@material-ui/core';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL, HEADERS } from '../../constants/requestConfig';
import PostCard from '../../components/PostComponents/PostCard/PostCard';
import { FlexBox } from '../../global/global-styles';
import { useRedirectUser } from '../../hooks/useRedirectUser';
import GlobalStateContext from '../../global/GlobalStateContext';

const FeedPage = () => {
    useRedirectUser()

    const [isPosting, setIsPosting] = useState(false)
    const feedData = useRequestData(`${BASE_URL}/posts`, HEADERS, undefined)

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
                <Button onClick={handleIsPosting} variant="contained" color="secondary">postar</Button>
            </div>}
            {feedData && feedData.posts.map((post) => {
                return (
                    <PostCard 
                        clickable
                        key={post.id}
                        post={post}
                    />
                )
            })}
        </FlexBox>
    )
}

export default FeedPage;
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/requestConfig';
import PostCard from '../../components/PostComponents/PostCard/PostCard';
import { FlexBox } from '../../global/global-styles';
import { useRedirectUser } from '../../hooks/useRedirectUser';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainAppBar from '../../components/MainAppBar/MainAppBar';
import FormDialog from '../../components/FormDialog/FormDialog';

const FeedPage = () => {
    useRedirectUser()

    const headers = { 
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }

    const [open, setOpen] = React.useState(false);
    const [isPosting, setIsPosting] = useState(false)
    const { data, getData }  = useRequestData(`${BASE_URL}/posts`, headers, undefined)

    const handleIsPosting = () => {
        setIsPosting(!isPosting)
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <FlexBox>
            <MainAppBar 
                isFeedPage
                isPosting={isPosting}
                postAction={handleClickOpen}
            />
            {/* {isPosting && 
                <FormDialog 
                    open={open}
                    upDate={getData}
                    handleIsPosting={handleIsPosting}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                />
            } */}
            <FormDialog 
                    open={open}
                    upDate={getData}
                    handleIsPosting={handleIsPosting}
                    handleClickOpen={handleClickOpen}
                    handleClose={handleClose}
                />
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
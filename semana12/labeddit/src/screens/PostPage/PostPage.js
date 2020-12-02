import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL, HEADERS } from '../../constants/requestConfig';
import PostCard from '../../components/PostComponents/PostCard/PostCard';
import PostCardMaterial from '../../components/PostComponents/PostCard/PostCardMaterial';
import { FlexBox } from '../../global/global-styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const PostPage = () => {
    const pathParams = useParams()
    const headers = { 
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }
    const { data, getData } = useRequestData(`${BASE_URL}/posts/${pathParams.postId}`, headers, undefined)

    return (
        <FlexBox>
            {data && 
                <PostCardMaterial
                    upDate={getData}
                    key={data.post.id}
                    post={data.post}
                />
            }
        </FlexBox>
    )
}

export default PostPage;
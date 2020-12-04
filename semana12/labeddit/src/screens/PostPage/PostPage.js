import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/requestConfig';
import PostCard from '../../components/PostComponents/PostCard/PostCard';
import { FlexBox, MainContainer } from '../../global/global-styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MainAppBar from '../../components/MainAppBar/MainAppBar';

const PostPage = () => {
    const pathParams = useParams()
    const headers = { 
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }
    const { data, getData } = useRequestData(`${BASE_URL}/posts/${pathParams.postId}`, headers, undefined)

    return (
        <FlexBox postPage>
            <MainAppBar/>
            {!data && <CircularProgress color="primary"/>}
            {data && 
                <PostCard
                    upDate={getData}
                    key={data.post.id}
                    post={data.post}
                />
            }
        </FlexBox>
    )
}

export default PostPage;
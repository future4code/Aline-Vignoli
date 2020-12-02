import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL, HEADERS } from '../../constants/requestConfig';
import PostCard from '../../components/PostComponents/PostCard/PostCard';
import PostCardMaterial from '../../components/PostComponents/PostCard/PostCardMaterial';
import { FlexBox } from '../../global/global-styles';

const PostPage = () => {
    const pathParams = useParams()
    const [isCommenting, setIsCommenting] = useState(false)
    const { data, getData } = useRequestData(`${BASE_URL}/posts/${pathParams.postId}`, HEADERS, undefined)

    const handleIsCommenting = () => {
        setIsCommenting(!isCommenting)
    }

    return (
        <FlexBox>
            {data && 
                <PostCardMaterial
                    upDate={getData}
                    key={data.post.id}
                    post={data.post}
                    isCommenting={isCommenting}
                    handleIsCommenting={handleIsCommenting}
                />
            }
        </FlexBox>
    )
}

export default PostPage;
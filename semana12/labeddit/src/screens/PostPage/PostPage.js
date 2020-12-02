import React from 'react';
import { useParams } from 'react-router-dom';
import { useRequestData } from '../../hooks/useRequestData';
import { BASE_URL, HEADERS } from '../../constants/requestConfig';
import PostCard from '../../components/PostComponents/PostCard/PostCard';

const PostPage = () => {
    const pathParams = useParams()
    const { data } = useRequestData(`${BASE_URL}/posts/${pathParams.postId}`, HEADERS, undefined)

    return (
        <div>
            {data && 
                <PostCard 
                    key={data.post.id}
                    post={data.post}
                />
            }
        </div>
    )
}

export default PostPage;
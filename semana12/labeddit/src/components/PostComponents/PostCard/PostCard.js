import React from 'react';
import { CardContainer } from './styles';

const PostCard = (props) => {

    return (
        <CardContainer>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </CardContainer>
    )
}

export default PostCard;
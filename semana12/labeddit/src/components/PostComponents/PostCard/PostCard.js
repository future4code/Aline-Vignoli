import React from 'react';
import { CardContainer, UpVoteIcon, DownVoteIcon } from './styles';
import upArrow from '../../../assets/upvote-arrow.png'
import  downArrow from '../../../assets/downvote-arrow.png'

const PostCard = (props) => {

    return (
        <CardContainer>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <div>
                <UpVoteIcon src={upArrow} alt={"seta para cima"}/>
                0
                <DownVoteIcon src={downArrow} alt={"seta para baixo"}/>
            </div>
        </CardContainer>
    )
}

export default PostCard;
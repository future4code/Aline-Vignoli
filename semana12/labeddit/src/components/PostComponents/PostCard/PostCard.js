import React from 'react';
import { CardContainer, UpVoteIcon, DownVoteIcon } from './styles';
import upArrow from '../../../assets/upvote-arrow.png';
import  downArrow from '../../../assets/downvote-arrow.png';
import { goToPost } from '../../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { vote } from '../../../services/post';
import { useRequestData } from '../../../hooks/useRequestData';
import { BASE_URL, HEADERS } from '../../../constants/requestConfig';

const PostCard = (props) => {
    const history = useHistory()

    const handleVote = (postId, direction) => {
        // props.post.votesCount === 0 ? 
        // vote(postId, -1, props.upDate) : 
        vote(postId, direction, props.upDate)
    }

    return (
        <CardContainer>
            <div onClick={props.clickable ? ()=> {goToPost(history, props.post.id)} : undefined}>
                <h4>{props.post.username}</h4>
                <h3>{props.post.title}</h3>
                <p>{props.post.text}</p>
            </div>
            <div>
                <button onClick={()=> handleVote(props.post.id, 1)}>
                    <UpVoteIcon src={upArrow} alt={"seta para cima"}/>
                </button>
                {props.post.votesCount}
                <button onClick={()=> handleVote(props.post.id, -1)}>
                    <DownVoteIcon src={downArrow} alt={"seta para baixo"}/>
                </button>
            </div>
        </CardContainer>
    )
}

export default PostCard;
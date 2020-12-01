import React from 'react';
import { CardContainer, UpVoteIcon, DownVoteIcon } from './styles';
import upArrow from '../../../assets/upvote-arrow.png';
import  downArrow from '../../../assets/downvote-arrow.png';
import { goToPost } from '../../../routes/coordinator';
import { useHistory } from 'react-router-dom';

const PostCard = (props) => {

    const history = useHistory()

    return (
        <CardContainer>
            <div onClick={props.clickable ? ()=> {goToPost(history, props.post.id)} : undefined}>
                <h4>{props.post.username}</h4>
                <h3>{props.post.title}</h3>
                <p>{props.post.text}</p>
            </div>
            <div>
                <button onClick={()=> window.alert("up voted")}>
                    <UpVoteIcon src={upArrow} alt={"seta para cima"}/>
                </button>
                {props.post.votesCount}
                <button onClick={()=> window.alert("down voted")}>
                    <DownVoteIcon src={downArrow} alt={"seta para baixo"}/>
                </button>
            </div>
        </CardContainer>
    )
}

export default PostCard;
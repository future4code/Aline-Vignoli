import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { goToPost } from '../../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { vote } from '../../../services/post';
import MoreIcon from '@material-ui/icons/More';
import Tooltip from '@material-ui/core/Tooltip';
import CommentCard from '../CommentCard/CommentCard';
import CommentForm from '../CommentForm/CommentForm';
import CommentIcon from '@material-ui/icons/Comment';
import CustomCardHeader from './CustomCardHeader';
import CustomCardContent from './CustomCardContent';
import { StyledPostCard } from './styles';
import { getFirstLetters, timestampToDateString, checkUserVote } from '../../../util/functions';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

const PostCard = (props) => {
  const history = useHistory()
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [isCommenting, setIsCommenting] = useState(false)
  const { firstWordFirstLetter, secondWordFirstLetter } = getFirstLetters(props.post.username)
  const { date, formatedTime } = timestampToDateString(props.post.createdAt)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  const handleIsCommenting = () => {
    setIsCommenting(!isCommenting)
    !props.isFeedPage && expanded ? setExpanded(expanded): setExpanded(!expanded)
    props.isFeedPage && setExpanded(!expanded)
  }

  const handleVote = (isUpVote) => {
    const direction = checkUserVote(isUpVote, props.post.userVoteDirection)
    vote(props.post.id, direction, props.upDate)
  }

  const actionButton = 
    props.isFeedPage && ( 
    <Tooltip title="ver post">
      <IconButton 
        color="secondary"
        onClick={()=> {goToPost(history, props.post.id)}}
        aria-label="see-more"
      >
        <MoreIcon />
      </IconButton>
    </Tooltip>
  )

  return (
    <StyledPostCard>
      <CustomCardHeader 
        firstLetter={firstWordFirstLetter}
        secondLetter={secondWordFirstLetter}
        action={actionButton}
        title={props.post.username}
        subheader={`${date} às ${formatedTime}hs`}
      />
      <CustomCardContent 
        title={props.post.title}
        text={props.post.text}
      />
      <CardActions disableSpacing>
        <IconButton 
          onClick={()=> handleVote(true)}
          aria-label="up=vote"
        >
          <ArrowUpwardIcon color="primary"/>
        </IconButton>
        <Typography variant="body2" color="textSecondary">
            {props.post.votesCount}
        </Typography>
        <IconButton 
          onClick={()=> handleVote(false)}
          aria-label="down-vote"
        >
          <ArrowDownwardIcon color="secondary"/>
        </IconButton>
        <Typography variant="body2" color="textSecondary">
            {`${props.post.commentsCount} comentários`}
        </Typography>
        <Tooltip title={isCommenting ? "cancelar" : "comentar"}>
          <IconButton 
            color="secondary"
            onClick={handleIsCommenting}
            aria-label="comentar"
          >
            <CommentIcon />
          </IconButton>
        </Tooltip>
        {!props.isFeedPage &&
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {isCommenting && 
            <CommentForm 
              upDate={props.upDate} 
              postId={props.post.id}
              handleIsCommenting={handleIsCommenting}
            />
          }
          {props.post.comments && props.post.comments.map(comment => {
            return (
              <CommentCard 
                upDate={props.upDate}
                key={comment.id}
                postId={props.post.id}
                comment={comment}
              />
            )
          })}
        </CardContent>
      </Collapse>
    </StyledPostCard>
  );
}

export default PostCard;
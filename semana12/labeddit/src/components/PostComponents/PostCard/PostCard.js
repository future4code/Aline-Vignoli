import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
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
  },
  avatar: {
    backgroundColor: red[500],
  },
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
      <CardHeader
        avatar={
          <Avatar aria-label="user-letters" className={classes.avatar}>
            {firstWordFirstLetter && firstWordFirstLetter.toUpperCase()}
            {secondWordFirstLetter && secondWordFirstLetter.toUpperCase()}
          </Avatar>
        }
        action={actionButton}
        title={props.post.username}
        subheader={`${date} às ${formatedTime}hs`}
      />
      <CardContent>
        <Typography variant="h5" color="textSecondary" component="h5">
          {props.post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
          onClick={()=> handleVote(true)}
          aria-label="up=vote"
        >
          <ArrowUpwardIcon color="primary"/>
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.post.votesCount}
        </Typography>
        <IconButton 
          onClick={()=> handleVote(false)}
          aria-label="down-vote"
        >
          <ArrowDownwardIcon color="secondary"/>
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
            {`${props.post.commentsCount} comentários`}
        </Typography>
        <Tooltip title="comentar">
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
          <Typography paragraph>
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
          </Typography>
        </CardContent>
      </Collapse>
    </StyledPostCard>
  );
}

export default PostCard;

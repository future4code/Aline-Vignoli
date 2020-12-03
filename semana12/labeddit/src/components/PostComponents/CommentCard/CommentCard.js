import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { voteComment } from '../../../services/post';
import { StyledCommentCard } from '../PostCard/styles';
import { getFirstLetters, checkUserVote } from '../../../util/functions';

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

const CommentCard = (props) => {
  const classes = useStyles();
  const { firstWordFirstLetter, secondWordFirstLetter } = getFirstLetters(props.comment.username)

  const handleVote = (isUpVote) => {
    const direction = checkUserVote(isUpVote, props.comment.userVoteDirection)
    voteComment(props.postId, props.comment.id, direction, props.upDate)
  }

  return (
    <StyledCommentCard>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {firstWordFirstLetter && firstWordFirstLetter.toUpperCase()}
            {secondWordFirstLetter && secondWordFirstLetter.toUpperCase()}
          </Avatar>
        }
        title={props.comment.username}
        subheader={props.comment.text}
      />
      <CardActions disableSpacing>
        <IconButton 
          onClick={()=> handleVote(true)}
          aria-label="voto positivo"
        >
          <ArrowUpwardIcon color="primary"/>
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.comment.votesCount}
        </Typography>
        <IconButton 
          onClick={()=> handleVote(false)}
          aria-label="voto negativo"
        >
          <ArrowDownwardIcon color="secondary"/>
        </IconButton>
      </CardActions>
    </StyledCommentCard>
  );
}

export default CommentCard;

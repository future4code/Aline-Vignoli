import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { voteComment } from '../../../services/post';
import { StyledCommentCard } from '../PostCard/styles';
import { getFirstLetters, checkUserVote } from '../../../util/functions';
import CustomCardHeader from '../PostCard/CustomCardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { secondaryLight } from '../../../constants/colors';

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: secondaryLight
  }
}));

const CommentCard = (props) => {
  const classes = useStyles();
  const { firstWordFirstLetter, secondWordFirstLetter } = getFirstLetters(props.comment.username)

  const handleVote = (isUpVote) => {
    const direction = checkUserVote(isUpVote, props.comment.userVoteDirection)
    voteComment(props.postId, props.comment.id, direction, props.upDate)
  }

  return (
    <StyledCommentCard className={classes.card}>
      <CustomCardHeader 
        firstLetter={firstWordFirstLetter}
        secondLetter={secondWordFirstLetter}
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
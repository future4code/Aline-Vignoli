import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
import { goToPost, goBack } from '../../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { vote } from '../../../services/post';
import MoreIcon from '@material-ui/icons/More';
import Tooltip from '@material-ui/core/Tooltip';
import CommentCard from '../CommentCard/CommentCard';
import CommentForm from '../CommentForm/CommentForm';
import CommentIcon from '@material-ui/icons/Comment';
import { StyledCard } from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

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

const PostCardMaterial = (props) => {
  const history = useHistory()
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleVote = (postId, direction) => { 
    vote(postId, direction, props.upDate)
  }

  const userNameFirstLetter = (name) => {
    if ( name.includes(" ")) {
        const splitedUserName = props.post.username.split(" ")
        const firstName = splitedUserName[0]
        const lastName = splitedUserName[1]
        const firstNameFirstLetter = firstName[0]
        const lastNameFirstLetter = lastName[0]
        return { firstNameFirstLetter, lastNameFirstLetter }
    }else {
        const splitedUserName = props.post.username.split("")
        const firstNameFirstLetter = splitedUserName[0]
        return { firstNameFirstLetter }
    }
    
  }
  
  const { firstNameFirstLetter, lastNameFirstLetter } = userNameFirstLetter(props.post.username)

  const actionButton = props.isFeedPage ? ( 
    <Tooltip title="ver detalhes">
      <IconButton 
        color="secondary"
        onClick={()=> {goToPost(history, props.post.id)}}
        aria-label="see-more"
      >
        <MoreIcon />
      </IconButton>
    </Tooltip>
  ) : (
    <Tooltip title="voltar">
      <IconButton 
        color="secondary"
        onClick={()=> {goBack(history)}}
        aria-label="go-back"
      >
        <ArrowBackIcon />
      </IconButton>
    </Tooltip>
  )

  return (
    <StyledCard>
      <CardHeader
        avatar={
          <Avatar aria-label="user-letters" className={classes.avatar}>
            {firstNameFirstLetter && firstNameFirstLetter.toUpperCase()}
            {lastNameFirstLetter && lastNameFirstLetter.toUpperCase()}
          </Avatar>
        }
        action={actionButton}
        title={props.post.username}
        subheader="September 14, 2016"
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
          onClick={()=> handleVote(props.post.id, 1)}
          aria-label="up=vote"
        >
          <ArrowUpwardIcon color="primary"/>
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.post.votesCount}
        </Typography>
        <IconButton 
          onClick={()=> handleVote(props.post.id, -1)}
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
              onClick={props.handleIsCommenting}
              aria-label="comentar"
            >
              <CommentIcon />
            </IconButton>
          </Tooltip>
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
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.isCommenting && 
              <CommentForm 
                upDate={props.upDate} 
                postId={props.post.id}
                handleIsCommenting={props.handleIsCommenting}
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
    </StyledCard>
  );
}

export default PostCardMaterial;

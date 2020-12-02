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
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { UpVoteIcon, DownVoteIcon } from './styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { goToPost } from '../../../routes/coordinator';
import { useHistory } from 'react-router-dom';
import { vote } from '../../../services/post';
import { Button } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/More';
import Tooltip from '@material-ui/core/Tooltip';

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

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {firstNameFirstLetter && firstNameFirstLetter.toUpperCase()}
            {lastNameFirstLetter && lastNameFirstLetter.toUpperCase()}
          </Avatar>
        }
        action={
          <Tooltip title="ver detalhes">
            <IconButton 
              color="secondary"
              onClick={props.clickable ? ()=> {goToPost(history, props.post.id)} : undefined}
              aria-label="settings"
            >
              <MoreIcon />
            </IconButton>
          </Tooltip>
          
        }
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
          aria-label="voto positivo"
        >
          <ArrowUpwardIcon color="primary"/>
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
            {props.post.votesCount}
        </Typography>
        <IconButton 
          onClick={()=> handleVote(props.post.id, -1)}
          aria-label="voto negativo"
        >
          <ArrowDownwardIcon color="secondary"/>
        </IconButton>
        <Typography variant="body2" color="textSecondary" component="p">
            {`${props.post.commentsCount} comentários`}
        </Typography>
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
          <Typography paragraph>Lista de comentários:</Typography>
          <Typography paragraph>
            Comentários apareceriam aqui
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default PostCardMaterial;

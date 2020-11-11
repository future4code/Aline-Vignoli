import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

const ProfilePhoto = styled.img`
    width: 60px;
`

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ListItemCard(props) {
  const classes = useStyles();

  return (
    <List className={classes.root} dense="true">
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ProfilePhoto src={props.photo} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={`${props.age} anos`}
        />
      </ListItem>
    </List>
  );
}
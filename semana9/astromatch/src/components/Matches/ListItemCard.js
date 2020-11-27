import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import styled from 'styled-components'

const ProfilePhoto = styled.img`
    width: 60px;
`

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 330,
  },
  item: {
    backgroundColor: "rgba(204, 148, 242, 0.5)",
    boxShadow: '1px 2px 2px #CC94F2'
  }
}));

const ListItemCard = (props) => {

  const classes = useStyles()

  return (
    <List className={classes.root} dense="true">
      <ListItem className={classes.item}>
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

export default ListItemCard
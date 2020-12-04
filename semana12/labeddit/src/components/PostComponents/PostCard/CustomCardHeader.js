import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
    avatar: {
      backgroundColor: red[500],
    },
}));

const CustomCardHeader = (props) => {
    const classes = useStyles();

    return (
      <CardHeader
        avatar={
          <Avatar aria-label="user-letters" className={classes.avatar}>
            {props.firstLetter && props.firstLetter.toUpperCase()}
            {props.secondLetter && props.secondLetter.toUpperCase()}
          </Avatar>
        }
        action={props.action}
        title={props.title}
        subheader={props.subheader}
      />
    )
}

export default CustomCardHeader;
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(6),
    },
  },
}));

const CustomSnackbar = (props) => {
  
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Snackbar 
        open={props.isMatch} 
        autoHideDuration={1800} 
        anchorOrigin={{vertical: 'top', horizontal: 'center'}} 
        onClose={props.handleClose}
      >
        <Alert onClose={props.handleClose} severity="success" color="info">
          Vocês deram Match!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default CustomSnackbar
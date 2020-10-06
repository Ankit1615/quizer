import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alerts from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1, 0, 2, 0),
        
  
      },
  },
}));

export default function Alert(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alerts
        severity={props.check}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {props.check === 'error' ? `Correct Answer : ${props.correct}` : props.check === 'info' ?  `Correct Answer : ${props.correct}` : 'You got it!'}
        </Alerts>
      </Collapse>
      <Button
        disabled={open}
        type="submit" 
        variant="outlined" 
        color="primary" 
        className={classes.button}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Check Answer
      </Button>
    </div>
  );
}

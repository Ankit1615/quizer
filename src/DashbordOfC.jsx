import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RadioBtn from './Radio_btn';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),       
         
    },
    button: {
      margin: theme.spacing(1, 0, 2, 0),     
    },
  }));



function DashbordOfC(props) {

  const classes = useStyles();

    return (        
            <div className={classes.root}>
            <Paper className={classes.paper}> 
            <Grid container spacing={1}>   
            <Grid item >

            <RadioBtn set={props.set}/>                    
            </Grid>
            </Grid>
            </Paper>
            </div>        
    )
}



export default DashbordOfC

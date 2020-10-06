import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),       
      color: theme.palette.text.secondary,
      
    },
    section1: {
        margin: theme.spacing(3, 2),
      },
  }));

export default function DashBoardOfAndroid(props) {
    const classes = useStyles();
    return (
        <div className="hearder">
            <Paper className={classes.paper}> 
            <Grid container spacing={1}>   
            <Grid item xs={4}  container 
               direction="row"
                justify="center"
                alignItems="center">
               <img src="https://cdn.vox-cdn.com/thumbor/kL-Z76ZSmU6AUOBanezRDqSQ7us=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19086219/Android_logo_stacked__RGB_.jpg"  style={{width :'130px'}}/>
            </Grid>   
               <Grid item xs={8} 
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h4">
                    Learn Android programming And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
            Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. Android was developed by the Open Handset Alliance, led by Google, and other companies. This tutorial will teach you basic Android programming and will also take you through some advance concepts related to Android application development.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Features of Android
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               After learning what is android, let's see the features of android. The important features of android are given below:
                 </Typography>
                 <ul type="square" >
                     <li>It is open-source.</li>
                     <li>Anyone can customize the Android Platform.</li>
                     <li>There are a lot of mobile applications that can be chosen by the consumer.</li>
                     <li>It provides many interesting features like weather details, opening screen, live RSS (Really Simple Syndication) feeds etc.</li>
                    <li>It provides support for messaging services(SMS and MMS), web browser, storage (SQLite), connectivity (GSM, CDMA, Blue Tooth, Wi-Fi etc.), media, handset layout etc.</li>
                 </ul>
                
               <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Prerequisites
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1" className={classes.section1} >
               Android programming is based on Java programming language so if you have basic understanding on Java programming then it will be a fun to learn Android application development.
                 </Typography>
                 
                 <ul>
                     <li>Operating Systems</li>
                     <li>Language Compilers</li>
                     <li>Assemblers</li>
                     <li>Text Editors</li>
                     <li>Print Spoolers</li>
                     <li>Network Drivers</li>
                     <li>Modern Programs</li>
                     <li>Databases</li>
                     <li>Language Interpreters</li>
                     <li>Utilities</li>
                 </ul>
            </Paper>
            
            
        </div>
    )
}

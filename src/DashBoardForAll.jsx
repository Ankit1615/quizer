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

export default function DashBoardForAll(props) {
    const classes = useStyles();
    return (
        <div className="hearder">
            <Paper className={classes.paper}> 
            <Grid container spacing={1}>   
            <Grid item xs={4}  container 
               direction="row"
                justify="center"
                alignItems="center">
               <img alt="" src="data:image/png;base64,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" />
            </Grid>   
               <Grid item xs={8} 
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h4">
                    Learn C programming And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
                <b>C programming</b> is a general-purpose, procedural, imperative computer programming language developed in 1972 by Dennis M. Ritchie at the Bell Telephone Laboratories to develop the UNIX operating system. C is the most widely used computer language. It keeps fluctuating at number one scale of popularity along with Java programming language, which is also equally popular and most widely used among modern software programmers.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Why to Learn C Programming?
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
                <b>C programming</b> language is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Software Development Domain. I will list down some of the key advantages of learning C Programming:
                 </Typography>
                 <ul type="square" >
                     <li>Easy to learn</li>
                     <li>Structured language</li>
                     <li>It produces efficient programs</li>
                     <li>It can handle low-level activities</li>
                     <li>It can be compiled on a variety of computer platforms</li>
                 </ul>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Facts about C
                    </Typography>
               </Grid>
               <ul type="square">
                   <li>C was invented to write an operating system called UNIX.</li>
                   <li>C is a successor of B language which was introduced around the early 1970s.</li>
                   <li>The language was formalized in 1988 by the American National Standard Institute (ANSI).</li>
                   <li>The UNIX OS was totally written in C.</li>
                   <li>Today C is the most widely used and popular System Programming Language.</li>
                   <li>Most of the state-of-the-art software have been implemented using C.</li>
                  
                   <li>Today's most popular Linux OS and RDBMS MySQL have been written in C.</li>
               </ul>
               <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Applications of C Programming
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               C was initially used for system development work, particularly the programs that make-up the operating system. C was adopted as a system development language because it produces code that runs nearly as fast as the code written in assembly language. Some examples of the use of C are -
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

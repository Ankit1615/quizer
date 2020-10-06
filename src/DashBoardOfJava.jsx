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

export default function DashBoardForJava(props) {
    const classes = useStyles();
    return (
        <div className="hearder">
            <Paper className={classes.paper}> 
            <Grid container spacing={1}>   
            <Grid item xs={4}  container 
               direction="row"
                justify="center"
                alignItems="center">
               <img src="https://firebasestorage.googleapis.com/v0/b/quizzer-68b5a.appspot.com/o/categories%2Fstorage%2Femulated%2F0%2FDCIM%2FScreenshots%2FIMG_20191224_175325.jpg?alt=media&token=3012e119-7d8f-4aeb-accd-c32f93cbf7fa" style={{width :'150px'}}/>
            </Grid>   
               <Grid item xs={8} 
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h4">
                    Learn Java programming And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
            <b>Java </b>is a high-level programming language originally developed by Sun Microsystems and released in 1995. Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This tutorial gives a complete understanding of Java. This reference will take you through simple and practical approaches while learning Java Programming language.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Why to Learn Java Programming?
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               <b>Java </b> is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Software Development Domain. I will list down some of the key advantages of learning Java Programming:
                 </Typography>
                 <ul type="square" >
                     <li><b>Object Oriented</b> − In Java, everything is an Object. Java can be easily extended since it is based on the Object model.</li>
                     <li><b>Platform Independent</b> − Unlike many other programming languages including C and C++, when Java is compiled, it is not compiled into platform specific machine, rather into platform independent byte code. This byte code is distributed over the web and interpreted by the Virtual Machine (JVM) on whichever platform it is being run on.</li>
                     <li><b>Simple</b> − Java is designed to be easy to learn. If you understand the basic concept of OOP Java, it would be easy to master.</li>
                     <li><b>Secure</b> − With Java's secure feature it enables to develop virus-free, tamper-free systems. Authentication techniques are based on public-key encryption.</li>
                     <li><b>Architecture-neutral</b> − Java compiler generates an architecture-neutral object file format, which makes the compiled code executable on many processors, with the presence of Java runtime system.</li>
                     <li><b>Portable</b> − Being architecture-neutral and having no implementation dependent aspects of the specification makes Java portable. Compiler in Java is written in ANSI C with a clean portability boundary, which is a POSIX subset.</li>
                     <li><b>Robust </b>− Java makes an effort to eliminate error prone situations by emphasizing mainly on compile time error checking and runtime checking.</li>
                 </ul>
                
               <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Applications of Java Programming
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               The latest release of the Java Standard Edition is Java SE 8. With the advancement of Java and its widespread popularity, multiple configurations were built to suit various types of platforms. For example: J2EE for Enterprise Applications, J2ME for Mobile Applications.               
                 </Typography>
                 <Typography gutterBottom variant="body1"  className={classes.section1}>
                 The new J2 versions were renamed as Java SE, Java EE, and Java ME respectively. Java is guaranteed to be Write Once, Run Anywhere.
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

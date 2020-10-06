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
               <img src="https://firebasestorage.googleapis.com/v0/b/quizzer-68b5a.appspot.com/o/categories%2Fstorage%2Femulated%2F0%2FDCIM%2FScreenshots%2FIMG_20191224_175620.jpg?alt=media&token=d48cfe1d-46d0-42b8-a5d1-ae5046953f0b" style={{width:'190px'}}/>
            </Grid>   
               <Grid item xs={8} 
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h4">
                    Learn PHP programming And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
            The PHP Hypertext Preprocessor (PHP) is a programming language that allows web developers to create dynamic content that interacts with databases. PHP is basically used for developing web based software applications. This tutorial helps you to build your base with PHP.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Why to Learn PHP?
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               PHP started out as a small open source project that evolved as more and more people found out how useful it was. Rasmus Lerdorf unleashed the first version of PHP way back in 1994.
                 </Typography>
                 <Typography gutterBottom variant="body1"  className={classes.section1}>
                 PHP is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning PHP:
                 </Typography>
                 <ul type="square" >
                     <li>PHP is a recursive acronym for "PHP: Hypertext Preprocessor".</li>
                     <li>PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.</li>
                     <li>It is integrated with a number of popular databases, including MySQL, PostgreSQL, Oracle, Sybase, Informix, and Microsoft SQL Server.</li>
                     <li>PHP is pleasingly zippy in its execution, especially when compiled as an Apache module on the Unix side. The MySQL server, once started, executes even very complex queries with huge result sets in record-setting time.</li>
                     <li>PHP supports a large number of major protocols such as POP3, IMAP, and LDAP. PHP4 added support for Java and distributed object architectures (COM and CORBA), making n-tier development a possibility for the first time.</li>
                     <li>PHP is forgiving: PHP language tries to be as forgiving as possible.</li>
                     <li>PHP Syntax is C-Like.</li>
                 </ul>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Characteristics of PHP
                    </Typography>
               </Grid>
               <ul type="square">
                   <li>Simplicity</li>
                   <li>Efficiency</li>
                   <li>Security</li>
                   <li>The UNIX OS was totally written in C.</li>
                   <li>Flexibility</li>
                   <li>Familiarity</li>
                  
                   <li>Today's most popular Linux OS and RDBMS MySQL have been written in C.</li>
               </ul>
               <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Applications of PHP
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1" className={classes.section1} >
               As mentioned before, PHP is one of the most widely used language over the web. I'm going to list few of them here:
                 </Typography>
                 <ul>
                     <li>PHP performs system functions, i.e. from files on a system it can create, open, read, write, and close them.</li>
                     <li>PHP can handle forms, i.e. gather data from files, save data to a file, through email you can send data, return data to the user.</li>
                     <li>You add, delete, modify elements within your database through PHP.</li>
                     <li>Access cookies variables and set cookies.</li>
                     <li>Using PHP, you can restrict users to access some pages of your website.</li>
                     <li>It can encrypt data.</li>
                     
                 </ul>
            </Paper>
            
            
        </div>
    )
}

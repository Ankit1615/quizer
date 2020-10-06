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
               <img src="https://i.pinimg.com/originals/99/f8/87/99f887833c475448723d3c9ac16c179b.png" style={{width:'110px'}}/>
            </Grid>   
               <Grid item xs={8} 
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h4">
                    Learn C++ programming And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
                <b>C++</b>s a middle-level programming language developed by Bjarne Stroustrup starting in 1979 at Bell Labs. C++ runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This C++ tutorial adopts a simple and practical approach to describe the concepts of C++ for beginners to advanded software engineers.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Why to Learn C++ Programming?
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
                <b>C++</b> is a MUST for students and working professionals to become a great Software Engineer. I will list down some of the key advantages of learning C++:
                 </Typography>
                 <ul type="square" >
                     <li>C++ is very close to hardware, so you get a chance to work at a low level which gives you lot of control in terms of memory management, better performance and finally a robust software development.</li>
                     <li><b>C++ programming</b> gives you a clear understanding about Object Oriented Programming. You will understand low level implementation of polymorphism when you will implement virtual tables and virtual table pointers, or dynamic type identification.</li>
                     <li>C++ is one of the every green programming languages and loved by millions of software developers. If you are a great C++ programmer then you will never sit without work and more importantly you will get highly paid for your work.</li>
                     <li>C++ is the most widely used programming languages in application and system programming. So you can choose your area of interest of software development.</li>
                     <li>C++ really teaches you the difference between compiler, linker and loader, different data types, storage classes, variable types their scopes etc.</li>
                 </ul>
                 <Typography gutterBottom variant="body1"  className={classes.section1}>
                 There are 1000s of good reasons to learn C++ Programming. But one thing for sure, to learn any programming language, not only C++, you just need to code, and code and finally code until you become expert.
                 </Typography>
                 
               <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Applications of C++ Programming
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               As mentioned before, C++ is one of the most widely used programming languages. It has it's presence in almost every area of software development. I'm going to list few of them here:
                 </Typography>
                 <ul>
                     <li><b>Application Software Development</b> - C++ programming has been used in developing almost all the major Operating Systems like Windows, Mac OSX and Linux. Apart from the operating systems, the core part of many browsers like Mozilla Firefox and Chrome have been written using C++. C++ also has been used in developing the most popular database system called MySQL.</li>
                     <li><b>Programming Languages Development</b> - C++ has been used extensively in developing new programming languages like C#, Java, JavaScript, Perl, UNIX’s C Shell, PHP and Python, and Verilog etc.</li>
                     <li><b>Computation Programming </b>- C++ is the best friends of scientists because of fast speed and computational efficiencies.</li>
                     <li><b>Games Development </b>- C++ is extremely fast which allows programmers to do procedural programming for CPU intensive functions and provides greater control over hardware, because of which it has been widely used in development of gaming engines.</li>
                     <li><b>Embedded System </b>- C++ is being heavily used in developing Medical and Engineering Applications like softwares for MRI machines, high-end CAD/CAM systems etc.</li>
                    
                 </ul>
                 <Typography gutterBottom variant="body1"  className={classes.section1}>
                 his list goes on, there are various areas where software developers are happily using C++ to provide great softwares. I highly recommend you to learn C++ and contribute great softwares to the community.
                 </Typography>
            </Paper>
            
            
        </div>
    )
}

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

export default function DashBoardForPython(props) {
    const classes = useStyles();
    return (
        <div className="hearder">
            <Paper className={classes.paper}> 
            <Grid container spacing={1}>   
            <Grid item xs={4}  container 
               direction="row"
                justify="center"
                alignItems="center">
               <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEsASwMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUCAf/EADUQAAICAQICCAIIBwAAAAAAAAECAAMEBRESQQYHISIxUXGxIzIUQmGBk7LB0RUzRXKRkqH/xAAbAQEAAwEBAQEAAAAAAAAAAAAAAwQFAgYBB//EAC8RAAICAgAEAwcDBQAAAAAAAAABAgMEERIhMVEFEyIUQXGBkbHRFTNSI2Gh4fD/2gAMAwEAAhEDEQA/ALxgCAIAgCAIAgCAIAgCAIAgEZ1vphi6blPiUY9mVfX84U7Kp8t+32lmvGc1xN6RWsyYwfCltnBfrFyQe7p1O3kbSf0k3sS/kQ+2v+JnwusilrVTPwGqQ+NlVnHt9u2w/WcSw2l6WdxzE36lonNF1eRSl1Lq9bqGVlO4IPOVGtPTLae1tGSfD6IAgCAIAgFa4+fqOia/qmRTpN+St1rqPhuPrEgg7Hs95oShCyuKctaM6Mp12SajvZE86jMQvfk4d1KuxJLUsignkNxLMZR6JleUZdWjnu06OS5Or52fojgFjvsHA9A7ATKyP3WatH7aJFISYQBAEA4fS/WX0bTOOjb6Rc3BXuPl8zJ6KvMnp9CC+3y47XUrC/V9Rtcu+flFj4/GYexmkq4JdEZjsm/ezWfVdQ5Z+X+O37x5cOy+h98yfd/U1cnPy704L8vItTffhstZhv6Ez6oxXRByk+TZoO0+nwtjoUSvRbT9yR3X/O08f45bKGT6W1yN3BinStkhwryt4QklW7Nt+creHZk3b5c3tPoT3VLh4kdSbxVEAQCv+tCxhfp6fV4bD9+6y/hdJfIoZvWPzIE7y6UjsaR0Uz9UpXIL141D/K1u5LDzAHKUcnxGjGepvmWqcSy1bXQ326vcg/1TH/CaU/1zF7/f8Fj9Os7nmrq8YWqcjVEavfvCqo8R9N/D/s4s8exox2ubPsfDbG+bJpRVVi49ePjpwVVqFRfICeRy8qWTa7JGzVUq4qKPdTfHr/uHvIsabWRDXdfc7nH0MkM9oZggCAQzrNwXu0ujMrUt9Gc8e3JW5/5AlvEnqbj3KmXDcFLsVlWBZfXW3yu4U+hM0JPSbKEVtpFzcK191AFUdgA5CfnWXNyvm5dz1FaSikjwzSo5EiRjZpG5HaRjZpE5HaRkwKzdl1jkp4j90veF0u7JT90ef4/yRZEuGt/3JDPYGYIAgHl0WxGR1DKw2II3BEA4h6H6AbRb/DawwbiHCzAA+gO0l8+zWtkXkV73oWt329TPFZUv68/i/ua1a9KMXGAdyAfsMrwsUZba38f9EjjtH0sTWbBjKUB2Ld7b3lnzNwdioXD39X5OOHnw8fP5G9hYuPk44seoAkkdhP7zXw8PGvojZKtbfx7/ABK1ttkJuKZvUY9VAIqQLv4zTporpXDXHSIJTlJ7kzLJTkQBAEAQDk5mDaLGeleJSd9h4iYGf4ZZKbsp579xcpvilqRoNVdv/Ks/1MxZ4uQnp1y+jLSsr7o2aK82yg0KnDWx8WG200sajPnT7Prhi/e+v/fIgsnSp8fVnXxaRj0LWDvt4nznoqKY01xrj0RSnJzk5MyyU5EAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEA//9k=" style={{width:'120px'}}/>
            </Grid>   
               <Grid item xs={8} 
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h4">
                    Learn Python programming And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
            <b>Python</b> is a general-purpose interpreted, interactive, object-oriented, and high-level programming language. It was created by Guido van Rossum during 1985- 1990. Like Perl, Python source code is also available under the GNU General Public License (GPL). This tutorial gives enough understanding on Python programming language.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Why to Learn Python?
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. It uses English keywords frequently where as other languages use punctuation, and it has fewer syntactical constructions than other languages.
                 </Typography>
                 <Typography gutterBottom variant="body1"  className={classes.section1}>
                 Python is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning Python:
                 </Typography>
                 <ul type="square" >
                     <li>Python is Interpreted − Python is processed at runtime by the interpreter. You do not need to compile your program before executing it. This is similar to PERL and PHP.</li>
                     <li>Python is Interactive − You can actually sit at a Python prompt and interact with the interpreter directly to write your programs.</li>
                     <li>Python is Object-Oriented − Python supports Object-Oriented style or technique of programming that encapsulates code within objects.</li>
                     <li>Python is a Beginner's Language − Python is a great language for the beginner-level programmers and supports the development of a wide range of applications from simple text processing to WWW browsers to games.</li>
                     
                 </ul>
                
               <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Applications of Python
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1" className={classes.section1} >
               As mentioned before, Python is one of the most widely used language over the web. I'm going to list few of them here:
                 </Typography>
                 
                 <ul>
                     <li><b>Easy-to-learn</b> − Python has few keywords, simple structure, and a clearly defined syntax. This allows the student to pick up the language quickly.</li>
                     <li><b>Easy-to-read </b> − Python code is more clearly defined and visible to the eyes.</li>
                     <li><b>Easy-to-maintain</b>  − Python's source code is fairly easy-to-maintain.</li>
                     <li><b>A broad standard library</b>  − Python's bulk of the library is very portable and cross-platform compatible on UNIX, Windows, and Macintosh.</li>
                     <li><b>Interactive Mode </b> − Python has support for an interactive mode which allows interactive testing and debugging of snippets of code.</li>
                     <li><b>Portable </b> − Python can run on a wide variety of hardware platforms and has the same interface on all platforms.</li>
                     <li><b>Extendable</b>  − You can add low-level modules to the Python interpreter. These modules enable programmers to add to or customize their tools to be more efficient.</li>
                     <li><b>Databases</b>  − Python provides interfaces to all major commercial databases.</li>
                     <li><b>GUI Programming</b>  − Python supports GUI applications that can be created and ported to many system calls, libraries and windows systems, such as Windows MFC, Macintosh, and the X Window system of Unix.</li>
                     <li><b>Scalable </b> − Python provides a better structure and support for large programs than shell scripting.</li>
                 </ul>
            </Paper>
            
            
        </div>
    )
}

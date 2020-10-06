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

export default function DashBoardForJavascript(props) {
    const classes = useStyles();
    return (
        <div className="hearder">
            <Paper className={classes.paper}> 
            <Grid container spacing={1}>   
            <Grid item xs={4}  container 
               direction="row"
                justify="center"
                alignItems="center">
               <img  alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAACSCAMAAACZpWO8AAAAdVBMVEX33x4AAAD/6B/74x6ZihPPuxkWFAP/5h//6iAnIwTw2x3r1R1GPwh8cA/z3B7eyBsSEALKthkxLAZsYg1CPAhMRQmShBKwnxWklBTArRfkzhxUTApdVAtoXg08NgfTwBoJCAEhHgSEdxC4pxd1ag4cGQM2MQawgTLuAAAEVElEQVR4nO2aa3eqOhBASQZMbBREKy+xVKT9/z/xgudoSQjhIbHnrjV79ROi2SRDMpnUcRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZCXA0A5r/84Z2C7rbc2fp+Pn6Xu9nw65VWZFMKxqQXefv3DzqWaexgLow1pk7sBtyYF3q7dlkYJnPSddFjlAViSAm9lVqLBuSt0Y2vJaUgJ4h6hmo+C/YISj/qNCPmy4mRWAqNRTWjByahErwNGZJ8tH08mJciGjAjZLG5k7qXtsBKJdDOZLSUoRhjV4bT00BmU+KHT/Odn59L+hUogLopPGYdhmsiipb/4O2dQUl63XAADAOYEx8e1d8/C+mtQkuek3Lk3Ds69o6Llu8io5Mgj1JqAgJ2aK8fAynpiUPKP7Q/y9gBBtiYkdl6eCfjf7Q8iqX0WnzM7XWRW2ksfyF3i2+ois5LUS1vrCfcYJSm3Xf8LSo6cTSb895WglJRWNlKjiUosITKxrfx/tBIUO8XpZG1TMlLJgW+icrCxpk1QourINWxSYdvKlFWKL40TeXeFvZ3ukBLouqnm82A1qIy5tyaa7kFV2KwJmJQy7dDdOBW2Ympgaxn2KhFSOa/Ol27wVJ2c2tiZPAfLFMadU+VbcBos5oCoDE5rC8nuoFKdqyXrfqfV8sWTYaU6oETZZ1Q7BS/c7bZuguCw6nNaLx1Po5Tq23jRW2qqfkep6SmRaMqoDemyTqOVmp7y05NO6WPZHHiCUnM3DapL18lbtJumKTWb76BbCCsXLXtNVWrGL1Mr4Rvxu0pNpCtv32ex5MjNUermwIu+c/OUHP4hKSVLriqDmQDVdgCTS3RPxbea4QycNDGxvep6QMlZqidmJh4odWpI5RGQE12Id2QvNP0EmVTqOcxWYn6yI6n01MpJUtz6EJzwth3INd0EgVRu3s5UAu41tb536bBUeZ9bRWye3XM3zQGAEkszjwjYvQn5kaQBII/kh4mWa9TJsan8xsVz3jjgP7nh9eeZuPy0u7fHdanNEuQ2uSt9bc6hBYDXbiL5+9RAw4v00+f7/fLpcp2npf5jNgAqlGVuzhGY+htV0Bz487dE2Tq6fzuDdTPbPPE5p5Ry3s2b8slC6pt+43TOL+q13SPL8LXZWl6V27x7skPiGdHNjt3f0fD9iBimeYh+pgvpKmpaWhM1HTrVbTFvhRvVwkaasfKxRseZ2RLTZs0y0rwO/rjBJmTu5hKE+l53UFYF8Ec8BZk5Tf5pIeutX/0hV/8rBxxTNeDOM6kSCONIHDWFGabOWx0u8VP5JPiGrX2p3UbTwBzkx+LZvQkNe8Jjk/ZkF8C8/ojaxPqUcxLMuWqi/JKI/oCol0f9fzBs4rdlMu56F+aeW0vwPi8Lav5poCws8/ay/XU8JNmCJV2gTlaksRtFbpx6mT+m82/fCa9JVJNcw0CwBYZMbgGAMUpZc+4/4TtAb0z4EoIgCPJ/4T+yPDbFN+Iz2wAAAABJRU5ErkJggg==" />
            </Grid>   
               <Grid item xs={8} 
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h4">
                    Learn Javascript And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
           <b> JavaScript</b> is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java. JavaScript is very easy to implement because it is integrated with HTML. It is open and cross-platform.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Why to Learn Javascript?
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
              <b> Javascript</b> is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning Javascript:
                 </Typography>
                 <ul type="square" >
                     <li>Javascript is the most popular programming language in the world and that makes it a programmer’s great choice. Once you learnt Javascript, it helps you developing great front-end as well as back-end softwares using different Javascript based frameworks like jQuery, Node.JS etc.</li>
                     <li>Javascript is everywhere, it comes installed on every modern web browser and so to learn Javascript you really do not need any special environment setup. For example Chrome, Mozilla Firefox , Safari and every browser you know as of today, supports Javascript.</li>
                     <li>Javascript helps you create really beautiful and crazy fast websites. You can develop your website with a console like look and feel and give your users the best Graphical User Experience.</li>
                     <li>JavaScript usage has now extended to mobile app development, desktop app development, and game development. This opens many opportunities for you as Javascript Programmer.</li>
                     <li>Due to high demand, there is tons of job growth and high pay for those who know JavaScript. You can navigate over to different job sites to see what having JavaScript skills looks like in the job market.</li>
                     <li>Great thing about Javascript is that you will find tons of frameworks and Libraries already developed which can be used directly in your software development to reduce your time to market.</li>
                    

                 </ul>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Applications of Javascript Programming
                    </Typography>
                    <Typography gutterBottom variant="body1"   className={classes.section1}  >
                    As mentioned before, Javascript is one of the most widely used programming languages (Front-end as well as Back-end). It has it's presence in almost every area of software development. I'm going to list few of them here:
                    </Typography>
               </Grid>
               <ul type="square">
                   <li><b>Client side validation </b>- This is really important to verify any user input before submitting it to the server and Javascript plays an important role in validting those inputs at front-end itself.</li>
                   <li><b>Manipulating HTML Pages </b>- Javascript helps in manipulating HTML page on the fly. This helps in adding and deleting any HTML tag very easily using javascript and modify your HTML to change its look and feel based on different devices and requirements.</li>
                   <li><b>User Notifications </b>- You can use Javascript to raise dynamic pop-ups on the webpages to give different types of notifications to your website visitors.</li>
                   <li><b>Back-end Data Loading </b>- Javascript provides Ajax library which helps in loading back-end data while you are doing some other processing. This really gives an amazing experience to your website visitors.</li>
                   <li><b>Presentations </b>- JavaScript also provides the facility of creating presentations which gives website look and feel. JavaScript provides RevealJS and BespokeJS libraries to build a web-based slide presentations.</li>
                   <li><b>Server Applications</b> - Node JS is built on Chrome's Javascript runtime for building fast and scalable network applications. This is an event based library which helps in developing very sophisticated server applications including Web Servers.</li>
                
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
               <Typography gutterBottom variant="body1" className={classes.section1}  >
               For this Javascript tutorial, it is assumed that the reader have a prior knowledge of HTML coding. It would help if the reader had some prior exposure to object-oriented programming concepts and a general idea on creating online applications.
                 </Typography>
                 
            </Paper>
            
            
        </div>
    )
}

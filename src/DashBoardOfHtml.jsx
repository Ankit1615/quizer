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

export default function DashBoardForHtml(props) {
    const classes = useStyles();
    return (
        <div className="hearder">
            <Paper className={classes.paper}> 
            <Grid container spacing={1}>   
            <Grid item xs={4}  container 
               direction="row"
                justify="center"
                alignItems="center">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrUsZ1cigMUOKUxCm1pGs8PDPv3fhBbQh-l1u6Qm5DCi921jg5i29CHjlpqJrEqLVnrGAX4zogmtwYq6uw5yD6Ij8nT-oiU_HErg&usqp=CAU&ec=45699844" style={{width : '120px'}}/>
            </Grid>   
               <Grid item xs={8} 
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h4">
                    Learn HTML And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
            HTML stands for Hyper Text Markup Language, which is the most widely used language on Web to develop web pages. HTML was created by Berners-Lee in late 1991 but "HTML 2.0" was the first standard HTML specification which was published in 1995. HTML 4.01 was a major version of HTML and it was published in late 1999. Though HTML 4.01 version is widely used but currently we are having HTML-5 version which is an extension to HTML 4.01, and this version was published in 2012.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Why to Learn HTML?
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               Originally, HTML was developed with the intent of defining the structure of documents like headings, paragraphs, lists, and so forth to facilitate the sharing of scientific information between researchers. Now, HTML is being widely used to format web pages with the help of different tags available in HTML language.
                 </Typography>
                 <Typography gutterBottom variant="body1"  className={classes.section1}>
                 HTML is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning HTML:
                 </Typography>
                 <ul type="square" >
                     <li><b>Create Web site</b> - You can create a website or customize an existing web template if you know HTML well.</li>
                     <li><b>Become a web designer</b> - If you want to start a carrer as a professional web designer, HTML and CSS designing is a must skill.</li>
                     <li><b>Understand web </b>- If you want to optimize your website, to boost its speed and performance, it is good to know HTML to yield best results.</li>
                     <li><b>Learn other languages</b> - Once you understands the basic of HTML then other related technologies like javascript, php, or angular are become easier to understand.</li>
                     
                 </ul>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Applications of HTML
                    </Typography>
               </Grid>
               <ul type="square">
                   <li><b>Web pages development</b> - HTML is used to create pages which are rendered over the web. Almost every page of web is having html tags in it to render its details in browser.</li>
                   <li><b>Internet Navigation </b>- HTML provides tags which are used to navigate from one page to another and is heavily used in internet navigation.</li>
                   <li><b>Responsive UI </b>- HTML pages now-a-days works well on all platform, mobile, tabs, desktop or laptops owing to responsive design strategy.</li>
                   <li><b>Offline support </b> HTML pages once loaded can be made available offline on the machine without any need of internet.</li>
                   <li><b>Game development</b>- HTML5 has native support for rich experience and is now useful in gaming developent arena as well.</li>
                  
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
               Before proceeding with this tutorial you should have a basic working knowledge with Windows or Linux operating system, additionally you must be familiar with −
                 </Typography>
                 <ul>
                     <li>Experience with any text editor like notepad, notepad++, or Edit plus etc.</li>
                     <li>How to create directories and files on your computer.</li>
                     <li>How to navigate through different directories.</li>
                     <li>How to type content in a file and save them on a computer.</li>
                     <li>Understanding about images in different formats like JPEG, PNG format.</li>
                    
                 </ul>
            </Paper>
            
            
        </div>
    )
}

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

export default function DashBoardForCss(props) {
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
                    Learn CSS And practice here
                    </Typography>
               </Grid>
           
            </Grid>
            <Divider  variant="middle" />
            <Typography gutterBottom variant="body1"  className={classes.section1}>
            <b>CSS</b> is used to control the style of a web document in a simple and easy way.

CSS is the acronym for "Cascading Style Sheet". This tutorial covers both the versions CSS1,CSS2 and CSS3, and gives a complete understanding of CSS, starting from its basics to advanced concepts.
                 </Typography>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"    >
                Why to Learn CSS?
                    </Typography>
               </Grid>
               <Typography gutterBottom variant="body1"  className={classes.section1}>
               <b>Cascading Style Sheets</b>, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.
                 </Typography>
                 <Typography gutterBottom variant="body1"  className={classes.section1}>
                <b> CSS </b>is a MUST for students and working professionals to become a great Software Engineer specially when they are working in Web Development Domain. I will list down some of the key advantages of learning CSS:
                 </Typography>
                 <ul type="square" >
                     <li><b>Create Stunning Web site</b> - CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects.</li>
                     <li><b>Become a web designer</b> - If you want to start a carrer as a professional web designer, HTML and CSS designing is a must skill.</li>
                     <li><b>Control web </b>- CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.</li>
                     <li><b>Learn other languages</b> - Once you understands the basic of HTML and CSS then other related technologies like javascript, php, or angular are become easier to understand.</li>
                     
                 </ul>
                 <Grid item  
               container 
               direction="row"
                justify="center"
                alignItems="center"
                >
                <Typography color="textPrimary" variant="h5"  className={classes.section1}  >
                Applications of CSS
                    </Typography>
               </Grid>
               <ul type="square">
                   <li><b>CSS saves time</b> - You can write CSS once and then reuse same sheet in multiple HTML pages. You can define a style for each HTML element and apply it to as many Web pages as you want.</li>
                   <li><b>Pages load faster </b>- If you are using CSS, you do not need to write HTML tag attributes every time. Just write one CSS rule of a tag and apply it to all the occurrences of that tag. So less code means faster download times.</li>
                   <li><b>Easy maintenance</b> - To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.</li>
                   <li><b>Superior styles to HTML</b> - CSS has a much wider array of attributes than HTML, so you can give a far better look to your HTML page in comparison to HTML attributes.</li>
                   <li><b>Multiple Device Compatibility</b> - Style sheets allow content to be optimized for more than one type of device. By using the same HTML document, different versions of a website can be presented for handheld devices such as PDAs and cell phones or for printing.</li>
                   <li><b>Global web standards</b> - Now HTML attributes are being deprecated and it is being recommended to use CSS. So its a good idea to start using CSS in all the HTML pages to make them compatible to future browsers.</li>
                  
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
               <Typography gutterBottom variant="body1"  >
               You should be familiar with:
                 </Typography>
                 <ul>
                     <li>Basic word processing using any text editor.</li>
                     <li>How to create directories and files.</li>
                     <li>How to navigate through different directories.</li>
                     <li>Internet browsing using popular browsers like Internet Explorer or Firefox.</li>
                     <li>Developing simple Web Pages using HTML or XHTML.</li>


                    
                 </ul>
            </Paper>
            
            
        </div>
    )
}

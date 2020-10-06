import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {Link } from 'react-router-dom';

const style = makeStyles({
  root: {
    maxWidth: 300,
    minHeight :370
  
  },
  media: {
    height: 120,
  },
});

function progamCard({img, desc , onclick , header}) {
    const classes = style();
  
  
  return (
    <Grid container justify = "center" >
    <Card className={classes.root} >
        <Link to={onclick} style={{textDecoration : 'none',color:'black'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title={header}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {header}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
      <CardActions>       
        <Button size="small" color="primary" style={{position:'relative', bottom:'0px'}}>
        <Link to={onclick} style={{textDecoration : 'none',color:'#1976d2'}} color="primary">Let's start</Link>
          
        </Button>       
      </CardActions>
    </Card>
    </Grid>
  );
}

export default progamCard;
// onClick={() => {
//     
// }}/>               
import React ,{useState} from 'react';
import Divider from '@material-ui/core/Divider';
import {
    Link
  } from "react-router-dom";
  import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles} from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import menu from './ProgramList'



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,      
        flexShrink: 0,   
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    
    toolbar: {            
        display : 'flex',   
        justifyContent : 'center',                   
        padding : '25px',
        fontWeight : '600',
        fontSize : '20px'
    },
    drawerPaper: {
      width: drawerWidth,
      
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(1),
    },
  }));
  
  
  


function LanguageRouteData() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    const classes = useStyles();

    
const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const  hasChildren = (item) => {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}
const SingleLevel = ({ item }) => {
  return (
    <ListItem button>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};



const MultiLevel = ({ item ,key}) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handlerSet =(url)=>{
    console.log(url)
  }
  

  
  

  return (
    <>
    <div key={key}>
     <main className={classes.content}  >
    <Link to={item.path} style={{textDecoration:'none'}} > 
      <ListItem button onClick={handleClick} >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      </Link>
      <Collapse in={open} timeout="auto" unmountOnExit>
        
        <List component="div" style={{paddingLeft : '30px'}} >
          {children.map((child, key) => (
            <div key={key}>
           
            <Link to ={`/${item.url}${child.to}`}  style={{textDecoration:'none'}}>              
            <MenuItem key={key} item={child} />
            </Link>
           </div>
          ))}
        </List>
      
      </Collapse>
      </main>
      </div>
    </>
  );
};



    return (
        <div>
            <div className={classes.toolbar} >   
               
               <Link to='/'><strong>Quiz</strong></Link>
               
               </div>
               <Divider />
               <List className='nav__link' component="nav"
                      aria-labelledby="nested-list-subheader">
                                                                
                         
                             {menu.map((item, key) => <MenuItem key={key} item={item} />)}                            
                
               </List>
             
        </div>
    )
}

export default LanguageRouteData

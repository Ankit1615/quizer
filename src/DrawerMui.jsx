import React, {useState}from 'react';
import AppBar from '@material-ui/core/AppBar';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import './DrawerMui.css';
import { CssBaseline,Drawer,Hidden,IconButton,Toolbar,Tooltip,Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import DarkThemBtn from './DarkThem';
import {ThemeProvider} from 'styled-components';
import LightIcon from '@material-ui/icons/Brightness4';
import MainContainer from './MainContainer';
import DarkIcon from '@material-ui/icons/Brightness7';
import Cpp from './DashboardOfCpp';
import DrawerLang from './LanguageRouteData'
import data from './ProgramList'
import DashBoardForC from './DashBoardForAll'
import DashBoardForJava from './DashBoardOfJava'
import Python from './DashBoardForPython'
import Android from './DashBoardOfAndroid'
import Php from './DashBoardOfPhp'
import Html from './DashBoardOfHtml'
import CSS from './DashBoardOfCss'
import Javascript from './DashBoardOfJavascript'
import ErrorPage from './ErrorPage'
const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
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




function DrawerMui(props) {
  const [themes , setTheme] = useState({mode : 'light'});
  const [iconColor,setColorIcon] = useState({iconColor : 'black'});

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const routes = [
    {
      path: "/",
      exact: true,      
      main: () => <MainContainer /> 
    },
    {
      path: "/C",
      exact: true,      
      main: () => <DashBoardForC />
    },
    {
      path: "/C++",
      exact: true,    
      main: () => <Cpp />
    },
    {
      path: "/Java",  
      exact: true,    
      main: () => <DashBoardForJava />
    },
    {
      path : "/Python",
      exact: true,      
      main: () => <Python />
    },
    {
      path: "/Php",     
      exact: true, 
      main: () => <Php />
    },
    {
      path: "/Javascript",      
      exact: true, 
      main: () => <Javascript />
    },
    {
      path: "/Android",     
      exact: true, 
      main: () => <Android />
    },
    {
      path: "/Html",     
      exact: true,       
      main: () => <Html />
    },
    {
      path: "/Css",     
      exact: true, 
      main: () => <CSS />
    },    
    
   

  ];
  

  const container = window !== undefined ? () => window().document.body : undefined; 
  return (
        
    <div className={classes.root}>
      <ThemeProvider theme={themes}>  
      <Router>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            All In One 
          </Typography>
          <Tooltip title="Toggle light / Dark theme" arrow>
            {
           themes.mode === 'light' ? (
            <LightIcon onClick={() => setTheme(themes.mode === 'dark' ? {mode : 'light'} : {mode : 'dark'})} 
              className='darkMode__icon'
              />
           ):(<DarkIcon onClick={() => setTheme(themes.mode === 'dark' ? {mode : 'light'} : {mode : 'dark'})} 
           className='darkMode__icon'/> )
              
          }
          </Tooltip>                                       
         <DarkThemBtn />
          
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer            
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            

            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerLang />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"           
            open
          >
            <DrawerLang />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div style={{marginTop:'65px'}}/>
      
        <Switch>
      
                      {routes.map((route, index) => (                      
                             <Route
                             key={index}
                             path={route.path}
                             exact={route.exact}
                             
                             
                           ><route.main /></Route>                    
                      ))}
                      
                      {data.map((set, key) => {
                          return set.items.map((item, index) => (                                          
                                 <Route
                                  key={index}
                                  path={`${set.path}${item.to}`}
                                  exact={item.exact}    
                                ><item.main /></Route>                                                     
                          ))})}
                            
                            <Route> 
    <ErrorPage />
  </Route>
                    
                                           
                      </Switch> 
                     
                      </main>
                      </Router> 
                      </ThemeProvider>      
    </div>    
  
   
  );
}


export default DrawerMui;

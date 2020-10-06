import React, {useState,useEffect}from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider,createGlobalStyle} from 'styled-components';
import stroage from 'local-storage-fallback';



function DarkThem() {
    const [themes , setTheme] = useState({mode : 'light'});
    const GlobalStyle = createGlobalStyle`
    body {
      background-color : ${props => 
      props.theme.mode === 'dark' ? '#111' : '#EEE'
      };
      color: ${props => 
      props.theme.mode === 'dark' ? '#EEE' : '#111'
      }
    
    }
    `;


    return (
        
        <div className='darkBtn'>
                <GlobalStyle />                                                         
        </div>
    )
}

export default DarkThem;

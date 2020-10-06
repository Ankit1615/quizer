import React, {useState}from 'react';
import {createGlobalStyle} from 'styled-components';


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

import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html,body{
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-seriff;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000;
    color: #333;
    font-size: 16px;
    overflow-x: hidden;
  }

  *{
    box-sizing: border-box;
  }

`;
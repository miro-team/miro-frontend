import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
  }
  html,
  body {
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }
`;

export default GlobalStyles;

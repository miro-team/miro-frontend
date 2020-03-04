import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body {
    overflow: hidden;
  }
`;

export default GlobalStyles;

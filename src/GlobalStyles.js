import { createGlobalStyle } from 'styled-components';

// import { media } from 'js/constants';


const GlobalStyles = createGlobalStyle`
  input, select {
    background: #fff;
    padding: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    height: 42px;
    width: 100%;
    border: 1px solid #d8d8d8;
    border-radius: 2px;
  }
`;

export default GlobalStyles;

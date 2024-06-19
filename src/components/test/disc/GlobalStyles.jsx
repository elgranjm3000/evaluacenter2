import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {    
    background-color: #ffff;
   
  }

  #root{
    padding: 0rem !important;
  }

  .gray-button {
    background-color: gray;
    color: white;
  }
  
  .gray-button:hover {
    background-color: darkgray;
  }
    
`;

export default GlobalStyles;
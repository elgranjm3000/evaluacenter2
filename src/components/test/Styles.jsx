import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
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

export default Styles;
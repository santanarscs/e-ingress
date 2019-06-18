import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     outline: 0
   }
   html, body, #root {
     height: 100%;
   }
   body {
     text-rendering: optimizeLegibility !important;
     -webkit-font-smoothing: antialiased !important;
     background: #F5F7F7;
     font-family: 'Roboto', sans-serif;
     color: #2C3842;
   }
   input, button {
    font-family: 'Roboto', sans-serif;
   }
   button {
     cursor: pointer;
   }
`;

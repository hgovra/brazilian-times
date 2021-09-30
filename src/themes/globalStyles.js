import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Goudy Bookletter 1911', serif;
    overflow-y: scroll;
    background: url(bg.jpg);
    background-size: contain;
  }
`;
 
export default GlobalStyle;
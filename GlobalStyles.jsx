import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
   
  }

  div {
     display: flex;
    flex-direction: row;

    width: 20%;
  }
`;

export default GlobalStyles;

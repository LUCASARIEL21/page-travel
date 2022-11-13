import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  * a{
    text-decoration: none;
  }

  * li{
    list-style: none;
  }
`;

export default GlobalStyle;
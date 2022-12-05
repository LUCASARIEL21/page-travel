import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  position: relative;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 75px;
}

body {
  font-weight: 400;
  overflow-x: hidden;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  line-height: normal;
}

p, a, li, button, ul {
  margin: 0;
  padding: 0;
  line-height: normal;
  text-decoration: none;
  list-style: none;
}

a:hover {
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
}

button {
  border: 0;
  background-color: transparent;
}

input:focus, textarea:focus, select:focus {
  outline: none;
}

`;

export default GlobalStyle;

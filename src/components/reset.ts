import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
  }
  html {
    font-size: 62.5%;
  }
  h2 {
    font-weight: 700;
  }
`

export default GlobalStyle;
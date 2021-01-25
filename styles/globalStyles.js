import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    height: 100%;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    background-color: #fff;
  }
`;

export default GlobalStyle;

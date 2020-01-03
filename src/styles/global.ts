import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  html {
    line-height: 1.5;
    letter-spacing: 0.01rem;
  }
  body {
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    overflow-x: hidden;
    max-width: 100%;
    transition: background-color 0.3s ease;
  }
  html, body, input, button {
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  button {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: 'Netflix Sans';
    font-weight: 100;
    font-display: optional;
    src: url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff2') format('woff2'), url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Th.woff') format('woff');
  }
  @font-face {
    font-family: 'Netflix Sans';
    font-weight: 300;
    font-display: optional;
    src: url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff2') format('woff2'), url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Lt.woff') format('woff');
  }
  @font-face {
    font-family: 'Netflix Sans';
    font-weight: normal;
    font-display: optional;
    src: url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff2') format('woff2'), url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Rg.woff') format('woff');
  }
  @font-face {
    font-family: 'Netflix Sans';
    font-weight: bold;
    font-display: optional;
    src: url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff2') format('woff2'), url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Md.woff') format('woff');
  }
  @font-face {
    font-family: 'Netflix Sans';
    font-weight: 800;
    font-display: optional;
    src: url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff2') format('woff2'), url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Bd.woff') format('woff');
  }
  @font-face {
    font-family: 'Netflix Sans';
    font-weight: 900;
    font-display: optional;
    src: url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff2') format('woff2'), url('https://assets.nflxext.com/ffe/siteui/fonts/netflix-sans/v3/NetflixSans_W_Blk.woff') format('woff');
  }

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
  }
  body {
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.colors.text};
    background: ${props => props.theme.colors.background};
    overflow-x: hidden;
    max-width: 100%;
  }
  html, body, input, button {
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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

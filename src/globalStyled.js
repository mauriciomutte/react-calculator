import { createGlobalStyle } from 'styled-components';
import MyFont from './fonts/RobotoMono-Thin.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'RobotoMono';
    src: url('${MyFont}') format('opentype');
  }

  ::-moz-focus-inner {border:0;}

  * {
    font-family: 'RobotoMono', monospace;
    margin: 0;
    padding: 0;
  }

  body {
    align-items: center;
    background: linear-gradient(to right, #355c7d, #6c5b7b, #c06c84);
    color: #fff;
    display: flex;
    height: 100vh;
    justify-content: center;
    text-align: center;
  }
`;

export default GlobalStyles;
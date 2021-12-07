import { createGlobalStyle } from 'styled-components';
import { themeColor } from './colorsStyle';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    color: ${ themeColor.neutral900 };
    font-family: Roboto, system-ui, Helvetica, sans-serif;
    font-weight: 400;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
  }
  #root {
    max-width: 1440px;
    margin: auto;
    overflow: hidden;
    @media (max-width: 1340px) {
      max-width: 1024px;
      max-height: 780px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  li {
      list-style: none;
  }
`;
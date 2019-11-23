import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background-color: #010157;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  a {
    color: #51e334;
    text-decoration: none;
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      max-width: 160px;
      height: 50%;
      background: rgba(81,227,52,0.3);
      transition: all 0.3s ease-in-out;
      transform-origin: left;
      transform: scaleX(0);
    }

    &:hover,
    &:focus {
      &:before {
        transform: scaleX(1);
      }
    }
  }

  noscript {
    color: #ffffff;
  }
`;

export default GlobalStyle;

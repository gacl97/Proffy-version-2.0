import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--color-background);
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Archivo', sans-serif;
    font-weight: 500;
  }

  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }

  :root {
  --color-background: #f0f0f7;
  --color-primary-lighter: #9871f5;
  --color-primary-light: #916bea;
  --color-primary: #8257e5;
  --color-primary-dark: #774dd6;
  --color-primary-darker: #6842c2;
  --color-secundary: #04d361;
  --color-secundary-dark: #04bf58;
  --color-title-in-primary: #ffffff;
  --color-text-in-primary: #d4c2ff;
  --color-text-title: #32264d;
  --color-text-complement: #9c98a6;
  --color-text-base: #6a6180;
  --color-line-in-white: #e6e6f0;
  --color-input-background: #f8f8fc;
  --color-button-text: #ffffff;
  --color-box-base: #ffffff;
  --color-box-footer: #fafafc;

  font-size: 60%;
}
`;

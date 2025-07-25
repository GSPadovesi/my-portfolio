import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
  
  body {
    display: flex;
    flex-direction: column;
    height: 100dvh;
    width: 100dvw;
    overflow-x: hidden; 
    background-color: #11071f;
    position: relative;
  }
`

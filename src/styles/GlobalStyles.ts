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
    width: 100%;
    overflow-x: hidden; 
    background-color: #11071f;
    position: relative;
  }

  ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #11071f; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #a855f7;
    border-radius: 10px;
    border: 3px solid #1e1e1e; /* espaço entre thumb e borda */
  }
`

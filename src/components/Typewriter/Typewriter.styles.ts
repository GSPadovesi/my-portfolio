import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

`

export const Writing = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: #fff;
  font-size: 20px;
  width: auto;

  @media(min-width: 768px){
    font-size: 50px;
  }
`

export const WritingCursor = styled.span`
  animation: blink 1s infinite;
  font-size: 20px;
  color: #fff;

   @media(min-width: 768px){
    font-size: 50px;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`
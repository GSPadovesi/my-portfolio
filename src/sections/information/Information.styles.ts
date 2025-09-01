import styled from 'styled-components'

export const Information = styled.section`
  width: 100%;
  min-height: 400px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  >.line{
    width: 100%; 
    max-width: 1080px; 
    height: 2px; 
    margin: 0 auto; 
    background: linear-gradient(
    to right,
    transparent,
    #a254e9,
    transparent
  );
  }
`

export const InformationContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  flex: 1;

   /* @media(min-width: 1440px){
    max-width: 1850px;
  } */
`
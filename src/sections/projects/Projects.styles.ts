import styled from 'styled-components'


export const Projects = styled.section`
  width: 100%;
  min-height: 100dvh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;

   >.line-trajectory{
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

export const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 46px 16px;
  gap: 36px;

  @media(min-width: 1024px){
    gap: 64px;
  }
`

export const ProjectTitle = styled.h2`
  width: 100%;
  text-align: left;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #fff;

  @media(min-width: 768px){
    font-size: 36px;
  }
  
  @media(min-width: 1440px){
    font-size: 46px;
  }
`
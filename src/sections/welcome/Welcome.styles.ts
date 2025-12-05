import styled, { keyframes } from 'styled-components'

export const Welcome = styled.section`
  width: 100%;
  overflow: hidden;

  .line{
    display: block;
    width: 100%; 
    max-width: 1080px; 
    height: 2px; 
    margin: 0 auto; 
    margin-top: 40px;
    background: linear-gradient(
    to right,
    transparent,
    #a254e9,
    transparent
  );
}
`;

export const WelcomePresentation = styled.div`
  width: 100%;
  background-image: url('/home.png');
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 90%, transparent 100%);

  @media(min-width: 1180px){
    height: 80dvh;
  }
`;

export const WelcomePresentationContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 16px;

  @media(min-width: 768px){
   gap: 40px;  
  }

  @media(min-width: 1024px){
    gap: 80px;
  }
`

export const Cover = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 6px solid #7127BA;
  object-fit: cover;
  box-shadow: 0 0 20px 20px rgba(155, 77, 224, 0.5);

  @media(min-width: 540px){
    width: 200px;
    height: 200px;
  }

  @media(min-width: 768px){
    width: 300px;
    height: 300px;
  }
`

export const WelcomePresentationSpan = styled.span`
  font-size: 26px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

  @media(min-width: 768px){
    font-size: 40px;
  }

   @media(min-width: 1440px){
    font-size: 60px;
  }
`

export const WelcomePresentationTitle = styled.h1`
  font-size: 48px;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  color: #7127BA;
  border-bottom: 4px solid #7127BA;

  @media(min-width: 768px){
    font-size: 70px;
  }

   @media(min-width: 1440px){
    font-size: 120px;
  }
`

export const WelcomeInformation = styled.div`
  width: 100%;
  height: 100%;

  @media(min-width: 1180px){
    /* transform: translateY(-120px); */
    margin-top: -120px;
  }
`

export const WelcomeInformationContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media(min-width: 1024px){
    flex-direction: row;
    gap: 24px;
  }
`

export const WelcomeInformationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  @media(min-width: 1024px){
    flex: 1;
    gap: 26px;
  }
`

export const WelcomeInformationSpan = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #fff;

  >a{
    color: #7127BA;
    border-bottom: 2px solid #7127BA;
    cursor: pointer;
  }

`

export const WelcomeInformationWrapperButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media(min-width: 1024px){
    flex-direction: row;
    justify-content: flex-start;
  }
`


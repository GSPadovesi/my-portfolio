import styled, { keyframes } from 'styled-components'

export const Welcome = styled.section`
  width: 100%;
  min-height: calc(100dvh - 100px);
  /* display: flex;
  flex-direction: column; */
  overflow: hidden;
`;

export const WelcomePresentation = styled.div`
  width: 100%;
  height: 80dvh;
  background-image: url('/home.png');
  background-repeat: no-repeat;
  background-size: cover;

  @media(max-width: 768px){
    height: 25dvh;
  }

  @media(max-width: 1024px){
    height: 50dvh;
  }
`;

export const WelcomePresentationContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1250px;
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
  box-shadow: 0 0 40px 20px rgba(155, 77, 224, 0.5);

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
`

export const WelcomeInformationContainer = styled.div`
  width: 100%;
  max-width: 1250px;
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

  @media(max-width: 766px){
    text-align: center;
  }
`

// export const WelcomeInformationParagraph = styled.p`
//   width: 100%;
//   font-family: "Roboto", sans-serif;
//   font-weight: 400;
//   font-size: 16px;
//   text-align: center;
//   line-height: 1.6;
//   hyphens: none;
//   text-transform: none;   
//   color: #fff;

//   @media(min-width: 768px){
//     font-size: 22px;
//     text-align: justify;
//   }
// `

export const WelcomeInformationWrapperButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: flex-start;
  }
`
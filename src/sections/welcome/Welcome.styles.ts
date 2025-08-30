import styled, { keyframes } from 'styled-components'

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 1;
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
    opacity: 0.5;
  }
`

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(147, 51, 234, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(147, 51, 234, 0.8);
  }
`
const twinkle = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`

export const Home = styled.section`
  width: 100%;
  min-height: 50dvh;
  position: relative;
  overflow: hidden;
  background-image: url('/home.png');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const HomeHeader = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media(min-width: 768px){
   gap: 40px;  
  }

  @media(min-width: 1440px){
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

export const HomeHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const HomeHeaderSpan = styled.span`
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

export const HomeHeaderTitle = styled.h1`
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
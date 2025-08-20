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
  min-height: 100dvh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-image: url('/home.png');
  background-repeat: no-repeat;
  background-size: cover;
`

export const HomeHeader = styled.div`
  width: 100%;
  max-width: 1250px;
  min-height: 600px;
  margin: 0 auto;
  flex: 1;
`

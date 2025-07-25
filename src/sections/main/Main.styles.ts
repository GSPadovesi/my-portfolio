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

export const Main = styled.section`
  width: 100%;
  min-height: 600px;
  background: linear-gradient(135deg, 
    #0f0f23 0%,
    #1a0b2e 25%,
    #16213e 50%,
    #2d1b69 75%,
    #7209b7 100%
  );
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgb(17, 7, 32) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgb(29, 11, 44) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgb(49, 21, 62) 0%, transparent 50%);
  }
`

export const Star = styled.div<{ top: string; left: string; delay: string; size: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background: white;
  border-radius: 50%;
  animation: ${twinkle} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
`

export const Particle = styled.div<{ top: string; left: string; delay: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 4px;
  height: 4px;
  background: rgba(147, 51, 234, 0.6);
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${(props) => props.delay};
`
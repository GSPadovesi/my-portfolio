import styled from 'styled-components'

export const ExperienceCard = styled.div`
  width: 100%;
  max-height: 190px;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  background: linear-gradient(
    135deg,
    #130428,
    #251043,
    #38126d,
    #261045,
    #190634
  );
  box-shadow: 0px 0px 15px rgba(56, 18, 109, 0.6);
  background-size: 200% 200%;
  animation: gradientAnimation 6s ease infinite;
  transition: all 0.2s ease-in-out;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

   &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media(max-width: 768px){
    max-height: 100px;
  }
`

export const ExperienceCardCover = styled.img`
  width: 220px;
  height: 150px;
  object-fit: contain;

  @media(max-width: 768px){
    width: 120px;
    height: 80px;
  }
`

export const TrajectoryParagraph = styled.p`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  line-height: 1.6;
  hyphens: none;
  text-transform: none;   
  color: #fff;

  @media(min-width: 768px){
    font-size: 26px;
  }
`
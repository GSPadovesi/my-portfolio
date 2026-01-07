import styled from 'styled-components';

export const ProjectCard = styled.div`
  width: 100%;
  height: 100%;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media(min-width: 1024px){
    flex-direction: row;
    gap: 0;
  }
`;

export const ProjectCardInformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`

export const InformationDescriptionContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  padding: 10px 16px 10px 10px;
  background: linear-gradient(
    to right,
  
    #18132e,
    rgba(70, 144, 212, 0)

  );
  backdrop-filter: blur(50px);
  z-index: 10;

  @media(min-width: 1024px){
    width: 112%;
  }
`

export const ProjectCardImageContainer = styled.div`
  width: 100%;
  box-shadow: -42px -42px 60px 10px rgba(180, 100, 230, 0.35);
  position: relative;

  >span{
    position: absolute;
    bottom: 16px;
    right: 16px;
    cursor: pointer;

    &:hover{
      transform: scale(1.1);
    }
  }
`

export const ProjectCardCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`
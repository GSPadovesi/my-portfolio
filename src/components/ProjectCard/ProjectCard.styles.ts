import styled from 'styled-components';

export const ProjectCard = styled.div<{ isOdd: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media(min-width: 1024px){
    flex-direction: ${props => props.isOdd ? 'row' : 'row-reverse'};
    align-items: stretch;
    gap: 16px;
  }
`;

export const ProjectCardInformationContainer = styled.div<{ isOdd: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isOdd ? 'flex-start' : 'flex-end'};
  gap: 16px;
  position: relative;
  z-index: 2;

  @media(min-width: 1024px){
    height: 100%;
    justify-content: space-between;
  }
`

export const ProjectCardTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const InformationDescriptionContainer = styled.div<{ isOdd: boolean }>`
  width: 100%;
  border-radius: 8px;
  padding: 10px 16px 10px 10px;
  background: ${props => props.isOdd ? 'linear-gradient(to right, #18132e, rgba(70, 144, 212, 0))' : 'linear-gradient(to left, #18132e, rgba(70, 144, 212, 0))'};
  backdrop-filter: blur(50px);
  z-index: 10;

  @media(min-width: 1024px){
    width: 112%;
  }
`

export const ProjectCardImageContainer = styled.div<{ isOdd: boolean }>`
  width: 100%;
  box-shadow: -42px -42px 60px 10px rgba(180, 100, 230, 0.10);
  position: relative;
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;

  @media(min-width: 1024px){
    max-height: 380px;
  }

  >span{
    position: absolute;
    bottom: 16px;
    right: 16px;
    cursor: pointer;
    z-index: 4;

    &:hover{
      transform: scale(1.1);
    }

    @media(min-width: 1024px){
      right: ${({ isOdd }) => isOdd ? '16px' : 'auto'};
      left: ${({ isOdd }) => isOdd ? 'auto' : '16px'};
    }
  }
`

export const ProjectCardCover = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;

  @media(min-width: 1024px){
    height: 100%;
  }
`

export const ButtonsWrapper = styled.div<{ isOdd: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isOdd ? 'flex-start' : 'flex-end'};
  gap: 16px;
  position: relative;
  z-index: 3;
`

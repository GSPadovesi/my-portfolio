import styled from 'styled-components'

export const Trajectory = styled.section`
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
`

export const TrajectoryContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 46px 16px;
  gap: 36px;
`

export const TrajectoryExperienceContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  >svg{
    width: 100%;
    object-fit: cover;
  }

  @media(min-width: 1024px){
    margin-top: 60px;
  }
`

export const TrajectoryExperienceGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  gap: 20px;
  
  @media(max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(240px, 1fr));
  }

`

export const TrajectoryExperienceCover = styled.img`
  width: 80%;
  margin-top: 60px;
  object-fit: cover;
`

export const SkillsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`
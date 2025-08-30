import styled from 'styled-components'

export const Trajectory = styled.section`
  width: 100%;
  min-height: 100dvh;
  position: relative;
  overflow: hidden;
  display: flex;
`

export const TrajectoryContainer = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 46px 16px;
  gap: 36px;
  

  @media(min-width: 1440px){
    max-width: 1850px;
  }
`

export const TrajectoryTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #A254E9;

  &.experience-title{
    font-size: 20px;
    color: #fff;
  }

  @media(min-width: 768px){
    font-size: 36px;

    &.experience-title{
      font-size: 48px;
    }
  }
  
  @media(min-width: 1440px){
    font-size: 46px;
  }
`

export const TrajectoryInformationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 36px;
`

export const TrajectoryParagraph = styled.p`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 1.6;
  hyphens: none;
  text-transform: none;   
  color: #fff;

  @media(min-width: 768px){
    font-size: 26px;
  }
`

export const TrajectoryExperienceContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 100px;
`
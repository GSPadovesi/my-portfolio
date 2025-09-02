import styled from 'styled-components'

export const Information = styled.section`
  width: 100%;
  min-height: 400px;
  position: relative;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;

  >.line{
    width: 100%; 
    max-width: 1080px; 
    height: 2px; 
    margin: 0 auto; 
    margin-top: 20px;
    background: linear-gradient(
    to right,
    transparent,
    #a254e9,
    transparent
  );
  }
`

export const InformationContainer = styled.div`
  width: 100%;
  /* min-height: 400px; */
  max-width: 1450px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 16px;
  
  @media(min-width: 1024px){
    flex-direction: row;
  }
`

export const InformationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;

  @media(min-width: 1024px){
    flex: 1;
  }
`

export const InformationSpan = styled.span`
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

export const InformationParagraph = styled.p`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 1.6;
  hyphens: none;
  text-transform: none;   
  color: #fff;
  /* max-width: 90%; */

  @media(min-width: 768px){
    font-size: 22px;
    text-align: justify;
  }
`
export const InformationWrapperButtons = styled.div`
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

export const InformationButton = styled.button`
  width: 100%;
  max-width: 300px;
  min-height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #fff;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 15px;

  >img{
    width: 18px;
    height: 18px;
  }

  &.primary{
    background-color: #A254E9;
    
    &:hover{
      background-color: transparent;
      border: 1px solid #A254E9;
    }
  }

   &.secondary{
    background-color: transparent; 
    border: 1px solid #A254E9;

    &:hover{
      background-color: #7c3aed;
    }
  }

`

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  top: 0;
  left: -60px;
  z-index: 10;

  @media(max-width: 1440px){
    left: 0;
    top: -70px;
  }

`


export const InfomartionDataContent = styled.div`
  width: 100%;
  border: 1px solid #7127BA;
  padding: 20px 26px;
  background-color: transparent;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  >span{
    font-size: 24px;
    border-bottom: 1px solid #693B93;
    margin-bottom: 12px;
    padding-bottom: 8px;

    >strong{
      color: #7127BA;
    }

    >a{
      border-bottom: none;
    }
  }

`
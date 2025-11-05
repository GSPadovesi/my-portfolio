import styled from 'styled-components'

export const DataContent = styled.div`
  width: 100%;
  border: 1px solid #7127BA;
  padding: 0 26px;
  background-color: transparent;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;

`

export const DataContentSpan = styled.span`
  font-size: 24px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid #693B93; 
  margin-bottom: 12px;
  padding-bottom: 8px;

  >strong{
    color: #7127BA;
  }

  >a{
      border-bottom: none;
  }

  @media(min-width: 768px){
    font-size: 40px;
  }

   @media(min-width: 1440px){
    font-size: 60px;
  }
`
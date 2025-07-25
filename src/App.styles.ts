import styled from "styled-components"

export const Content = styled.section`
  width: 100%;
  min-height: 100dvh;
  position: relative;
`

export const WhatsAppCircle = styled.div`
  background-color: #25d366;
  color: #fff;
  padding: 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.circle};
  cursor: pointer;

  @media(max-width: 768px){
    display: none;
  }
`;

export const ButtonModeTemporary = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #000;
  padding: 6px;
  margin-bottom: 12px;
`
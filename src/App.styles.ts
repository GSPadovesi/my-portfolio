import styled from "styled-components"

export const WhatsAppCircle = styled.div`
  background-color: #25d366;
  color: #fff;
  padding: 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px 10px rgba(155, 77, 224, 0.5);
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

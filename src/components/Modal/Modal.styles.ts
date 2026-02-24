import styled from 'styled-components';

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
`

export const ModalCard = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 120px;
  background-color: #11071f;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: #a855f7;
  color: #fff;
  font-size: 20px;
  z-index: 999;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;

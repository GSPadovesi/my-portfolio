import styled from 'styled-components';

export const MediaButton = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: #A254E9;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;  
  border: none;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  >img{
    width: 30px;
    height: 30px;
  }
`;

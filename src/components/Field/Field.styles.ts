import styled, { css } from 'styled-components';

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Label = styled.label`
  font-size: 14px;
  line-height: 1.2;
  font-weight: 600;
  color: #fff;
  font-family: 'Inter', sans-serif;
`

export const ErrorMessage = styled.span`
  font-size: 12px;
  line-height: 1.3;
  color: #ff8f8f;
  font-family: 'Inter', sans-serif;
`

export const controlStyles = css`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(17, 7, 31, 0.8);
  border-radius: 10px;
  padding: 12px 14px;
  color: #fff;
  font-size: 14px;
  line-height: 1.4;
  font-family: 'Inter', sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    border-color: #a254e9;
    box-shadow: 0 0 0 2px rgba(162, 84, 233, 0.25);
  }
`;

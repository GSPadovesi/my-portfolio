import styled from 'styled-components';

export const FormCard = styled.div`
  width: 100%;
  border: 1px solid rgba(162, 84, 233, 0.35);
  border-radius: 16px;
  background: rgba(26, 11, 46, 0.6);
  backdrop-filter: blur(4px);
  padding: 24px;
`

export const FormIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const SuccessState = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

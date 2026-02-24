import styled from 'styled-components';
import { controlStyles } from '../Field.styles';

export const TextArea = styled.textarea`
  ${controlStyles}
  min-height: 120px;
  resize: vertical;
`

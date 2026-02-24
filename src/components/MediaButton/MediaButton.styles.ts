import styled from 'styled-components';

export const MediaButton = styled.button<{ $tooltip?: string }>`
  position: relative;
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

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }

  &::after {
    content: '${({ $tooltip }) => $tooltip || ''}';
    position: absolute;
    left: 50%;
    bottom: calc(100% + 10px);
    transform: translateX(-50%) translateY(6px);
    padding: 6px 10px;
    border-radius: 8px;
    background-color: rgba(8, 8, 8, 0.95);
    color: #fff;
    font-size: 12px;
    line-height: 1.2;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: calc(100% + 4px);
    transform: translateX(-50%) translateY(6px);
    border: 6px solid transparent;
    border-top-color: rgba(8, 8, 8, 0.95);
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
    z-index: 2;
  }

  &:hover::after,
  &:hover::before,
  &:focus-visible::after,
  &:focus-visible::before {
    opacity: ${({ $tooltip }) => ($tooltip ? 1 : 0)};
    transform: translateX(-50%) translateY(0);
  }

  >img{
    width: 30px;
    height: 30px;
  }
`;

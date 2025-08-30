import styled, { css } from 'styled-components';

export const HeaderHamburguer = styled.div<any>`
  ${({ isOpen }) => css`
    width: 32px;
    min-width: 28px;
    min-height: 24px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    

    &:before, &:after{
      content: '';
      transform: rotate(${isOpen ? '-45deg' : '0'}) translate(${isOpen ? '-7px, 7px' : '0, 0'});
      transition: transform 0.4s ease;
      border-bottom: 4px solid #ffffff;
      border-radius: 2px;
      color: #4F4F4F;
    }

    &:after{
      transform: rotate(${isOpen ? '45deg' : '0'}) translate(${isOpen ? '-6px, -7px' : '0, 0'});
    }
  `};

  @media(min-width: 769px) {
    display: none;
  }
`

export const Hamburger = styled.span<any>`
  ${({ isOpen }) => css`
    position: relative;
    width: 32px;
    transition: background-color 0.4s ease margin-right 0.4s ease;
    border-bottom: 4px solid #ffffff;
    border-radius: 2px;

    ${isOpen && css`
      border-color: transparent !important;
    `}
  `};
`
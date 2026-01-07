import styled, { css } from 'styled-components';

const StyledButtonPrimaty = css`
  background-color: ${(props) => props.theme.colors.primary.base};

  &:hover{
    /* background-color: transparent; */
    /* border: 1px solid ${(props) => props.theme.colors.primary.hover}; */
  }
`

const StyledButtonSecondary = css`
  background-color: transparent; 
  border: 1px solid ${(props) => props.theme.colors.primary.base};

  &:hover{
    /* background-color: ${(props) => props.theme.colors.primary.hover}; */
  }
`

export const StyledButton = styled.button<{
  $variant?: 'primary' | 'secondary';
  $size?: 'small' | 'medium' | 'large';
  $fontSize?: string;
  $fontWeight?: string;
}>`
  ${({ $variant, $fontSize, $fontWeight, $size }) => css`
    border-radius: 12px;
    font-size: ${$fontSize || '16px'};
    font-weight: ${$fontWeight || 'normal'};
    width: ${$size === 'small' ? 'min-content' : $size === 'large' ? '350px' : '250px'};
    padding: 16px;
    min-width: 32px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border: none;
    color: #fff;
    line-height: 1.2;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    img{
      width: 18px;
      height: 18px;
    }

    ${$variant === 'primary' && StyledButtonPrimaty}
    ${$variant === 'secondary' && StyledButtonSecondary}

    @media(max-width: 768px){
      width: 100%;
    }
  `}
`
import styled, { css } from 'styled-components';

export const StyledParagraph = styled.p<{
  $fontSize?: string;
  $fontWeight?: string;
  $textAlign?: 'left' | 'center' | 'right' | 'justify';
  $fontColor?: string;
  $lineHeight?: string;
  $fontStyle?: string;
}>`
  ${({ $fontSize, $fontWeight, $textAlign, $fontColor, $lineHeight, $fontStyle }) => css`
    font-size: ${$fontSize || '16px'};
    font-weight: ${$fontWeight || 'normal'};
    text-align: ${$textAlign || 'left'};
    color: ${$fontColor || '#fff'};
    line-height: ${$lineHeight || '1.2'};
    font-style: ${$fontStyle || 'normal'};
    font-family: 'Inter', sans-serif;

    @media(max-width: 768px){
      font-size: ${`calc(${$fontSize} - 4px)`}
    }
  `}
`
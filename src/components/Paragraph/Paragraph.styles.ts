import styled, { css } from 'styled-components';
import type { ParagraphSize } from './Paragraph.types';

const paragraphScale: Record<ParagraphSize, { mobile: string; tablet: string; desktop: string }> = {
  sm: { mobile: '12px', tablet: '14px', desktop: '16px' },
  md: { mobile: '16px', tablet: '18px', desktop: '20px' },
  lg: { mobile: '20px', tablet: '22px', desktop: '24px' },
  xl: { mobile: '24px', tablet: '26px', desktop: '28px' },
  '2xl': { mobile: '28px', tablet: '30px', desktop: '32px' },
};

export const StyledParagraph = styled.p<{
  $size?: ParagraphSize;
  $fontSize?: string;
  $fontWeight?: string;
  $textAlign?: 'left' | 'center' | 'right' | 'justify';
  $fontColor?: string;
  $lineHeight?: string;
  $fontStyle?: string;
}>`
  ${({ $size = 'md', $fontSize, $fontWeight, $textAlign, $fontColor, $lineHeight, $fontStyle }) => {
    const scale = paragraphScale[$size];

    return css`
    font-size: ${$fontSize || scale.desktop};
    font-weight: ${$fontWeight || 'normal'};
    text-align: ${$textAlign || 'left'};
    color: ${$fontColor || '#fff'};
    line-height: ${$lineHeight || '1.2'};
    font-style: ${$fontStyle || 'normal'};
    font-family: 'Inter', sans-serif;

    @media(max-width: 1023px){
      font-size: ${$fontSize ? `calc(${$fontSize} - 2px)` : scale.tablet};
    }

    @media(max-width: 767px){
      font-size: ${$fontSize ? `calc(${$fontSize} - 4px)` : scale.mobile};
    }
  `}}
`

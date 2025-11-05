import React from 'react';
import { TitleProps } from './Title.types';
import styled, { css } from 'styled-components';

const variantFontSize = {
  h1: ["30px", "36px"],
  h2: ["24px", "30px"],
  h3: ["20px", "24px"],
} as const;

export const StyledTitle = styled(
  ({ $variant = 'h1', $fontWeight, $textAlign, $fontColor, ...props }: TitleProps) => {
    const Tag = $variant || 'h1';
    return React.createElement(Tag, props);
  }
)<{
  $fontWeight?: string;
  $textAlign?: 'left' | 'center' | 'right' | 'justify';
  $fontColor?: string;
  $variant?: keyof typeof variantFontSize;
}>`
  ${({ theme, $fontWeight, $textAlign, $fontColor, $variant }) => css`
    font-size: ${variantFontSize[$variant || 'h1'][1]};
    line-height: 1.4;
    font-weight: ${$fontWeight || 600};
    text-align: ${$textAlign || 'left'};
    color: ${$fontColor || theme?.colors?.text || '#000'};

    @media(max-width: 768px){
      font-size: ${variantFontSize[$variant || 'h1'][0]};
    }
  `}
`;

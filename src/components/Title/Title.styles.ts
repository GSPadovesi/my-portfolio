import React from 'react';
import type { TitleProps, TitleSize } from './Title.types';
import styled, { css } from 'styled-components';

const titleScale: Record<TitleSize, { mobile: string; tablet: string; desktop: string }> = {
  sm: { mobile: '12px', tablet: '14px', desktop: '16px' },
  md: { mobile: '16px', tablet: '18px', desktop: '20px' },
  lg: { mobile: '20px', tablet: '22px', desktop: '24px' },
  xl: { mobile: '24px', tablet: '28px', desktop: '32px' },
  '2xl': { mobile: '28px', tablet: '32px', desktop: '36px' },
};

const variantToSize: Record<NonNullable<TitleProps['$variant']>, TitleSize> = {
  h1: '2xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'sm',
};

export const StyledTitle = styled(
  ({ $variant = 'h1', $size: _size, $fontFamily: _fontFamily, $fontWeight: _fontWeight, $textAlign: _textAlign, $fontColor: _fontColor, ...props }: TitleProps) => {
    void _size;
    void _fontFamily;
    void _fontWeight;
    void _textAlign;
    void _fontColor;
    const Tag = $variant || 'h1';
    return React.createElement(Tag, props);
  }
)<{
  $size?: TitleSize;
  $fontFamily?: string;
  $fontWeight?: string;
  $textAlign?: 'left' | 'center' | 'right' | 'justify';
  $fontColor?: string;
  $variant?: NonNullable<TitleProps['$variant']>;
}>`
  ${({ theme, $size, $fontFamily, $fontWeight, $textAlign, $fontColor, $variant = 'h1' }) => {
    const scale = titleScale[$size || variantToSize[$variant]];
    return css`
    font-size: ${scale.desktop};
    line-height: 1.4;
    font-weight: ${$fontWeight || 600};
    text-align: ${$textAlign || 'left'};
    color: ${$fontColor || theme.colors.text.primary};
    font-family: ${$fontFamily || 'Inter'}, sans-serif;
    width: 100%;

    @media(max-width: 1023px){
      font-size: ${scale.tablet};
    }

    @media(max-width: 767px){
      font-size: ${scale.mobile};
    }
  `}}
`;

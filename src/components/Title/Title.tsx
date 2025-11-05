import { TitleProps } from './Title.types'
import React from 'react'
import * as S from './Title.styles'

export const Title: React.FC<TitleProps> = ({ children, $variant = 'h1', $fontWeight, $textAlign, $fontColor, ...props }) => {
  return <S.StyledTitle
    as={$variant}
    $variant={$variant}
    $fontWeight={$fontWeight}
    $textAlign={$textAlign}
    $fontColor={$fontColor}
    {...props}
  >
    {children}
  </S.StyledTitle>
} 

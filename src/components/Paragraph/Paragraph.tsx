import { ParagraphProps } from './Paragraph.types';
import Balancer from 'react-wrap-balancer';
import * as S from './Paragraph.styles';

export const Paragraph: React.FC<ParagraphProps> = ({ children, $fontSize, $fontWeight, $textAlign, $fontColor, $lineHeight, $fontStyle, ...props }) => {
  return <S.StyledParagraph $fontSize={$fontSize} $fontWeight={$fontWeight} $textAlign={$textAlign} $fontColor={$fontColor} $lineHeight={$lineHeight} $fontStyle={$fontStyle} {...props}><Balancer>{children}</Balancer></S.StyledParagraph>;
}
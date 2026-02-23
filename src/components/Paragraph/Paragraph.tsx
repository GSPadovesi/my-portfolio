import type { ParagraphProps } from './Paragraph.types';
import Balancer from 'react-wrap-balancer';
import * as S from './Paragraph.styles';

export const Paragraph: React.FC<ParagraphProps> = ({ children, $size = 'md', $fontSize, $fontWeight, $textAlign, $fontColor, $lineHeight, $fontStyle, ...props }) => {
  return <S.StyledParagraph
    $size={$size}
    $fontSize={$fontSize}
    $fontWeight={$fontWeight}
    $textAlign={$textAlign}
    $fontColor={$fontColor}
    $lineHeight={$lineHeight}
    $fontStyle={$fontStyle}
    {...props}
  >
    <Balancer>{children}</Balancer>
  </S.StyledParagraph>;
}

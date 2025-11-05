import * as S from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ children, $variant = "primary", $size = "medium", $fontSize, $fontWeight, ...props }) => {
  return <S.StyledButton $variant={$variant} $size={$size} $fontSize={$fontSize} $fontWeight={$fontWeight} {...props}>{children}</S.StyledButton>
}
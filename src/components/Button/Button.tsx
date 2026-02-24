import * as S from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ children, $variant = "primary", $size = "medium", $fontSize, $fontWeight, ...props }) => {
  return <S.StyledButton type={props.type || 'button'} $variant={$variant} $size={$size} $fontSize={$fontSize} $fontWeight={$fontWeight} {...props}>{children}</S.StyledButton>
}

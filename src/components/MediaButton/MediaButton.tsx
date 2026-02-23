import type { MediaButtonProps } from './MediaButton.types';
import * as S from './MediaButton.styles';

export const MediaButton = ({ icon, onClick, disabled = false }: MediaButtonProps) => {
  return (
    <S.MediaButton onClick={onClick} disabled={disabled}>
      <img src={icon} alt="media icon" />
    </S.MediaButton>
  )
}

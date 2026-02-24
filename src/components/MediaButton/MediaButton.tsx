import type { MediaButtonProps } from './MediaButton.types';
import * as S from './MediaButton.styles';

export const MediaButton = ({ icon, tooltip, onClick, disabled = false }: MediaButtonProps) => {
  return (
    <S.MediaButton
      $tooltip={tooltip}
      onClick={onClick}
      disabled={disabled}
      aria-label={tooltip || 'social media button'}
      title={tooltip}
    >
      <img src={icon} alt="media icon" />
    </S.MediaButton>
  )
}

import { Github } from 'lucide-react';
import * as S from './MediaButton.styles';

export const MediaButton = (props: any) => {
  const { icon, onClick } = props;
  return (
    <S.MediaButton onClick={onClick}>
      {<img src={icon || <Github color="#ffffff" />} alt="media icon" />}
    </S.MediaButton>
  )
}
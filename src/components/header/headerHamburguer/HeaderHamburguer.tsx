import { useCallback } from 'react';
import * as S from './HeaderHamburguer.styles';

export const HeaderHamburguer = (props: any) => {
  const { isOpen, setIsOpen } = props;
  const onClick = useCallback(() => setIsOpen(!isOpen), [isOpen, setIsOpen]);

  return (
    <S.HeaderHamburguer isOpen={isOpen} onClick={onClick}>
      <S.Hamburger isOpen={isOpen} />
    </S.HeaderHamburguer>
  )
}
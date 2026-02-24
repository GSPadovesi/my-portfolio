import * as S from './HeaderHamburguer.styles';

interface HeaderHamburguerProps {
  isOpen: boolean;
}

export const HeaderHamburguer = ({ isOpen }: HeaderHamburguerProps) => {

  return (
    <S.HeaderHamburguer isOpen={isOpen}>
      <S.Hamburger isOpen={isOpen} />
    </S.HeaderHamburguer>
  )
}

import { Rocket } from 'lucide-react'
import * as S from './Welcome.styles'

export const Welcome = (props: any) => {
  const { id } = props;

  return (
    <S.Home id={id}>
      <S.HomeContainer>
        <S.HomeHeader>
          <div>
            <S.Cover src='/eu.png' />
          </div>
          <S.HomeHeaderContainer>
            <S.HomeHeaderSpan>Desenvolvedor <Rocket /></S.HomeHeaderSpan>
            <S.HomeHeaderTitle>full stack</S.HomeHeaderTitle>
          </S.HomeHeaderContainer>
        </S.HomeHeader>
      </S.HomeContainer>
    </S.Home>
  )
}
import * as S from './Information.styles'

export const Information = (props: any) => {
  const { id } = props;

  return (
    <>
      <S.Information id={id}>
        <S.InformationContainer>
          <h1>Olá, mundo</h1>
        </S.InformationContainer>
        <span className='line' />
      </S.Information>
    </>
  )
}
import * as S from './Projects.styles'

export const Project = (props: any) => {
  const { id } = props;
  return (
    <S.Projects id={id}>
      <S.ProjectsContainer>
        <S.ProjectTitle>Projetos que participei</S.ProjectTitle>
      </S.ProjectsContainer>
    </S.Projects>
  )
}
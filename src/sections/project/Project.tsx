import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toProjectSlug, projectsData } from '../../utils';
import { Button } from '../../components';
import type { ProjectProps } from './Project.types';
import * as S from './Project.styles'

export const Project = ({ id }: ProjectProps) => {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const project = projectsData.find((p) => toProjectSlug(p.title) === projectName);

  if (!projectName) return null;
  if (!project) {
    return (
      <S.ProjectSection>
        <S.ProjectContainer>
          <S.ProjectTitle $variant='h1' $size='2xl' $fontFamily='Poppins' $fontWeight='600' $fontColor='#CCD6F6'>
            Projeto não encontrado
          </S.ProjectTitle>
          <S.ProjectMessage $balance={false} $size='md' $lineHeight='1.5'>
            O projeto que você tentou acessar não existe ou foi renomeado.
          </S.ProjectMessage>
          <Button $variant='primary' onClick={() => navigate('/')}>Voltar para a página principal</Button>
        </S.ProjectContainer>
      </S.ProjectSection>
    );
  }

  return (
    <S.ProjectSection id={id}>
      <S.ProjectContainer>
        <S.ProjectTitle $variant='h1' $size='2xl' $fontFamily='Poppins' $fontWeight='600' $fontColor='#CCD6F6'>{project.title}</S.ProjectTitle>
      </S.ProjectContainer>
    </S.ProjectSection>
  )
}

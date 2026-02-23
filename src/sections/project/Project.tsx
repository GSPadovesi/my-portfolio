import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { toProjectSlug, projectsData } from '../../utils';
import { Title, Paragraph, Button } from '../../components';
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
        <Title style={{ fontFamily: 'poppins', marginBottom: '20px' }} $variant='h1' $fontWeight='600' $fontColor='#CCD6F6'>
          Projeto não encontrado
        </Title>
        <Paragraph $lineHeight='1.5' style={{ marginBottom: '20px' }}>
          O projeto que você tentou acessar não existe ou foi renomeado.
        </Paragraph>
        <Button $variant='primary' onClick={() => navigate('/')}>Voltar para a página principal</Button>
      </S.ProjectSection>
    );
  }

  return (
    <S.ProjectSection id={id}>
      <Title style={{ fontFamily: 'poppins', marginBottom: '20px' }} $variant='h1' $fontWeight='600' $fontColor='#CCD6F6'>{project?.title}</Title>
    </S.ProjectSection>
  )
}

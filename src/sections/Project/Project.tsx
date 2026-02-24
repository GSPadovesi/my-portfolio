import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toProjectSlug, projectsData, redirectToLink } from '../../utils';
import { Button } from '../../components';
import type { ProjectProps } from './Project.types';
import * as S from './Project.styles';

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
            Projeto nao encontrado
          </S.ProjectTitle>
          <S.ProjectMessage $balance={false} $size='md' $lineHeight='1.5'>
            O projeto que voce tentou acessar nao existe ou foi renomeado.
          </S.ProjectMessage>
          <Button $variant='primary' onClick={() => navigate('/')}>Voltar para a pagina principal</Button>
        </S.ProjectContainer>
      </S.ProjectSection>
    );
  }

  return (
    <S.ProjectSection id={id}>
      <S.ProjectContainer>
        <S.ProjectTitle $variant='h1' $size='2xl' $fontFamily='Poppins' $fontWeight='600' $fontColor='#CCD6F6'>
          {project.title}
        </S.ProjectTitle>
        <S.ProjectEnterprise $balance={false} $size='lg' $fontWeight='600' $fontColor='#A254E9'>
          {project.enterprise}
        </S.ProjectEnterprise>
        <S.ProjectMessage $balance={false} $size='md' $lineHeight='1.6'>
          {project.longDescription}
        </S.ProjectMessage>
        <S.TechList>
          {project.technologies.map((tech) => (
            <S.TechChip key={tech}>{tech}</S.TechChip>
          ))}
        </S.TechList>
        <S.Actions>
          <Button $variant='primary' onClick={() => redirectToLink(project.link)} disabled={!project.link.trim()}>
            Ir para o site oficial
          </Button>
        </S.Actions>
      </S.ProjectContainer>
    </S.ProjectSection>
  );
};

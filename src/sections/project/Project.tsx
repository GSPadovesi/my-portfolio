import { useParams } from 'react-router-dom'
import { projectsData } from '../../utils/projectsData';
import { Title } from '../../components/Title/Title';
import * as S from './Project.styles'

export const Project = () => {
  const { projectName } = useParams();
  const project = projectsData.find(p => p.title === projectName?.split('-').join(' '));

  console.log(projectName)

  if (!projectName) return null;
  return (
    <S.ProjectSection>
      <Title style={{ fontFamily: 'poppins', marginBottom: '20px' }} $variant='h1' $fontWeight='600' $fontColor='#CCD6F6'>{project?.title}</Title>
    </S.ProjectSection>
  )
}
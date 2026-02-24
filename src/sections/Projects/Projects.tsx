import { ProjectCard, Title } from '../../components';
import { projectsData } from '../../utils';
import * as S from './Projects.styles'

interface ProjectsSectionProps {
  id: string;
}

export const Projects = ({ id }: ProjectsSectionProps) => {
  const projects = projectsData;
  return (
    <S.Projects id={id}>
      <S.ProjectsContainer>
        <Title $variant='h2' $fontColor='#A254E9' >Projetos que participei</Title>
        {projects.map((project) => (
          <ProjectCard key={project.id} isOld={project.id % 2 !== 0} {...project} />
        ))}
      </S.ProjectsContainer>
      <span className='line' />
    </S.Projects>
  )
}

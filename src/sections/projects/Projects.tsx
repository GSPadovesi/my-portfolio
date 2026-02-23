import { ProjectCard } from '../../components';
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
        <S.ProjectTitle>Projetos que participei</S.ProjectTitle>
        {projects.map((project) => {
          const isOdd = project.id % 2 !== 0;
          return <ProjectCard key={project.id} isOld={isOdd} {...project} />
        })}
      </S.ProjectsContainer>
      <span className='line' />
    </S.Projects>
  )
}

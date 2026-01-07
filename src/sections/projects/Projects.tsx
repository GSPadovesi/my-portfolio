import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import { projectsData } from '../../utils/projectsData';
import * as S from './Projects.styles'

export const Project = (props: any) => {
  const { id } = props;
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
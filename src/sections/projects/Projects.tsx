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
        {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
      </S.ProjectsContainer>
    </S.Projects>
  )
}
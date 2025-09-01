import { experienceInfo } from './Trajectory.constant'
import { ExperienceCard } from '../../components/experiencecard/ExperienceCard';
import Balancer from 'react-wrap-balancer';
import * as S from './Trajectory.styles';

export const Trajectory = (props: any) => {
  const { id } = props;

  return (
    <S.Trajectory id={id}>
      <S.TrajectoryContainer>
        <S.TrajectoryTitle><Balancer>Trajetória e Perfil Profissional</Balancer></S.TrajectoryTitle>
        <S.TrajectoryInformationContainer>
          <S.TrajectoryParagraph><Balancer>Sou formado pela FIAP (Faculdade de Informática e Administração Paulista) e possuo formação técnica em Informática pelo SENAC Tatuapé. Iniciei minha carreira em tecnologia em 2021 e, a partir de 2024, passei a atuar diretamente com programação, com foco no desenvolvimento de soluções web e sistemas completos.</Balancer></S.TrajectoryParagraph>
          <S.TrajectoryParagraph><Balancer>Atualmente, trabalho na Gastech e já atuei anteriormente nas empresas Grupo Eureka e Renditech Tecnologia. Nessas experiências, participei de projetos profissionais que me permitiram aplicar e aprimorar minhas habilidades técnicas.</Balancer></S.TrajectoryParagraph>
          <S.TrajectoryParagraph><Balancer>Tenho domínio de tecnologias como HTML, CSS, JavaScript, React, Node.js e Next.js, além de conhecimentos em Java adquiridos durante a faculdade. Atuo principalmente no frontend, mas também desenvolvo funcionalidades no backend, contribuindo em todas as etapas dos projetos.</Balancer></S.TrajectoryParagraph>
          <S.TrajectoryParagraph><Balancer>Sou um profissional comprometido, curioso e focado em aprendizado contínuo. Valorizo o trabalho em equipe, gosto de enfrentar desafios técnicos e busco sempre entregar soluções úteis, bem estruturadas e alinhadas às necessidades do usuário e da empresa.</Balancer></S.TrajectoryParagraph>
        </S.TrajectoryInformationContainer>
        <S.TrajectoryExperienceContainer id='experiencias-section'>
          <S.TrajectoryTitle className='experience-title'><Balancer>Experiências de trabalho</Balancer></S.TrajectoryTitle>
          <S.TrajectoryExperienceGrid>
            {experienceInfo.map((item) => (
              <ExperienceCard key={item.id} {...item} />
            ))}
          </S.TrajectoryExperienceGrid>
          <S.TrajectoryParagraph className='paragraph-experience'><Balancer>Atualmente possuo conhecimento avançado nas seguintes <span style={{ color: '#A254E9', borderBottom: '2px solid #7127BA' }}>ferramentas</span></Balancer></S.TrajectoryParagraph>
          <S.TrajectoryExperienceCover src='/skills.png' alt='skills' />
        </S.TrajectoryExperienceContainer>
      </S.TrajectoryContainer>
      <span className='line-trajectory' />
    </S.Trajectory>
  )
}
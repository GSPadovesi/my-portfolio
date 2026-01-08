import { experienceInfo, skillsInfo } from './Trajectory.constant'
import { ExperienceCard } from '../../components/Experiencecard/ExperienceCard';
import { Title } from '../../components/Title/Title';
import { Paragraph } from '../../components/Paragraph/Paragraph';
import { Skills } from '../../components/Skills/Skills';
import * as S from './Trajectory.styles';

export const Trajectory = (props: any) => {
  const { id } = props;

  return (
    <S.Trajectory id={id}>
      <S.TrajectoryContainer>
        <Title $variant='h2' $fontColor='#A254E9' $textAlign='center'>Trajetória e Perfil Profissional</Title>
        <Paragraph
          style={{ hyphens: 'none', textTransform: 'none' }}
          $fontWeight='400'
          $fontSize='26px'
          $textAlign='center'
          $lineHeight='1.6'
        >
          Sou formado pela FIAP (Faculdade de Informática e Administração Paulista) e possuo formação técnica em Informática pelo SENAC Tatuapé. Iniciei minha carreira em tecnologia em 2021 e, a partir de 2024, passei a atuar diretamente com programação, com foco no desenvolvimento de soluções web e sistemas completos.
        </Paragraph>
        <Paragraph
          style={{ hyphens: 'none', textTransform: 'none' }}
          $fontWeight='400'
          $fontSize='26px'
          $textAlign='center'
          $lineHeight='1.6'
        >
          Atualmente, trabalho na Gastech e já atuei anteriormente nas empresas Grupo Eureka e Renditech Tecnologia. Nessas experiências, participei de projetos profissionais que me permitiram aplicar e aprimorar minhas habilidades técnicas.
        </Paragraph>
        <Paragraph
          style={{ hyphens: 'none', textTransform: 'none' }}
          $fontWeight='400'
          $fontSize='26px'
          $textAlign='center'
          $lineHeight='1.6'
        >
          Tenho domínio de tecnologias como HTML, CSS, JavaScript, React, Node.js e Next.js, além de conhecimentos em Java adquiridos durante a faculdade. Atuo principalmente no frontend, mas também desenvolvo funcionalidades no backend, contribuindo em todas as etapas dos projetos.
        </Paragraph>
        <Paragraph
          style={{ hyphens: 'none', textTransform: 'none' }}
          $fontWeight='400'
          $fontSize='26px'
          $textAlign='center'
          $lineHeight='1.6'
        >
          Sou um profissional comprometido, curioso e focado em aprendizado contínuo. Valorizo o trabalho em equipe, gosto de enfrentar desafios técnicos e busco sempre entregar soluções úteis, bem estruturadas e alinhadas às necessidades do usuário e da empresa.
        </Paragraph>

        <S.TrajectoryExperienceContainer id='experiencias-section'>
          <Title $variant='h2' $fontColor='#fff' $textAlign='left'>Experiências de trabalho</Title>
          <S.TrajectoryExperienceGrid>
            {experienceInfo.map((item) => <ExperienceCard key={item.id} {...item} />)}
          </S.TrajectoryExperienceGrid>
          <Paragraph $fontSize='28px' $fontColor='#fff' $textAlign='left'>Atualmente possuo conhecimento avançado nas seguintes <span style={{ color: '#A254E9', borderBottom: '2px solid #7127BA' }}>ferramentas</span></Paragraph>
          <S.SkillsWrapper>
            {skillsInfo.map((skill) => <Skills key={skill.id} {...skill} />)}
          </S.SkillsWrapper>
        </S.TrajectoryExperienceContainer>
      </S.TrajectoryContainer>
      <span className='line' />
    </S.Trajectory>
  )
}

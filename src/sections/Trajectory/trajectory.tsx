import { experienceInfo, skillsInfo } from './Trajectory.constant'
import { Title, Paragraph, Skills, ExperienceCard } from '../../components';
import type { TrajectoryProps } from './Trajectory.types';
import * as S from './Trajectory.styles';

const bodyParagraphStyle = { hyphens: 'none', textTransform: 'none' } as const;

export const Trajectory = ({ id }: TrajectoryProps) => {
  return (
    <S.Trajectory id={id}>
      <S.TrajectoryContainer>
        <Title $variant='h2' $fontColor='#A254E9' >Trajetória e Perfil Profissional</Title>
        <Paragraph $fontWeight='400' $balance={false} $size='lg' style={bodyParagraphStyle}>
          Sou formado pela FIAP (Faculdade de Informática e Administração Paulista) e possuo formação técnica em Informática pelo SENAC Tatuapé. Iniciei minha carreira em tecnologia em 2021 e, a partir de 2024, passei a atuar diretamente com programação, com foco no desenvolvimento de soluções web e sistemas completos.
        </Paragraph>
        <Paragraph $fontWeight='400' $balance={false} $size='lg' style={bodyParagraphStyle}>
          Atualmente, trabalho na Gastech e já atuei anteriormente nas empresas Grupo Eureka e Renditech Tecnologia. Nessas experiências, participei de projetos profissionais que me permitiram aplicar e aprimorar minhas habilidades técnicas.
        </Paragraph>
        <Paragraph $fontWeight='400' $balance={false} $size='lg' style={bodyParagraphStyle}>
          Tenho domínio de tecnologias como HTML, CSS, JavaScript, React, Node.js e Next.js, além de conhecimentos em Java adquiridos durante a faculdade. Atuo principalmente no frontend, mas também desenvolvo funcionalidades no backend, contribuindo em todas as etapas dos projetos.
        </Paragraph>
        <Paragraph $fontWeight='400' $balance={false} $size='lg' style={bodyParagraphStyle}>
          Sou um profissional comprometido, curioso e focado em aprendizado contínuo. Valorizo o trabalho em equipe, gosto de enfrentar desafios técnicos e busco sempre entregar soluções úteis, bem estruturadas e alinhadas às necessidades do usuário e da empresa.
        </Paragraph>

        <S.TrajectoryExperienceContainer id='experiencias-section'>
          <Title $variant='h2' $fontColor='#fff' >Experiências de trabalho</Title>
          <S.TrajectoryExperienceGrid>
            {experienceInfo.map((item) => <ExperienceCard key={item.id} {...item} />)}
          </S.TrajectoryExperienceGrid>
          <Paragraph $balance={false} $size='2xl' $fontColor='#fff' >Atualmente possuo conhecimento avançado nas seguintes <S.TrajectoryHighlight>ferramentas</S.TrajectoryHighlight></Paragraph>
          <S.SkillsWrapper>
            {skillsInfo.map((skill) => <Skills key={skill.id} {...skill} />)}
          </S.SkillsWrapper>
          <S.TrajectoryExperienceCover src='/skills.svg' alt='Ilustracao das habilidades tecnicas' />
        </S.TrajectoryExperienceContainer>
      </S.TrajectoryContainer>
      <span className='line' />
    </S.Trajectory>
  )
}

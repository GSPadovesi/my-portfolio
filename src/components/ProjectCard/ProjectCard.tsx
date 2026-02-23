import { ImageUpscale } from 'lucide-react';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import { Title } from '../Title/Title'
import { redirectToLink } from '../../utils/redirectToLink';
import { useCallback, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';
import { toProjectSlug } from '../../utils/projectSlug';
import type { ProjectCardProps } from './ProjectCard.types';
import * as S from './ProjectCard.styles'

export const ProjectCard = (props: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onNavigate = useCallback((projectName: string) => {
    navigate(`/project/${toProjectSlug(projectName)}`);
  }, [navigate]);

  return (
    <S.ProjectCard isOdd={props.isOld}>
      <S.ProjectCardInformationContainer isOdd={props.isOld}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Title style={{ fontFamily: 'poppins' }} $variant='h4' $fontWeight='600' $fontColor='#9857D3'>{props.enterprise}</Title>
          <Title style={{ fontFamily: 'poppins' }} $variant='h1' $fontWeight='600' $fontColor='#CCD6F6'>{props.title}</Title>
        </div>
        <S.InformationDescriptionContainer isOdd={props.isOld}>
          <Paragraph>{props.description}</Paragraph>
        </S.InformationDescriptionContainer>
        <S.ButtonsWrapper isOdd={props.isOld}>
          <Button $variant="primary" $size="large" disabled={!props.link.trim()} onClick={() => redirectToLink(props.link)}>Ir ao site oficial</Button>
          <Button $variant="secondary" $size="large" onClick={() => onNavigate(props.title)}>Ver mais sobre</Button>
        </S.ButtonsWrapper>
      </S.ProjectCardInformationContainer>
      <S.ProjectCardImageContainer>
        <S.ProjectCardCover src={props.cover} alt={props.title} />
        <span><ImageUpscale onClick={() => setIsOpen(!isOpen)} /></span>
      </S.ProjectCardImageContainer>
      {!!isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <S.ProjectCardCover src={props.cover} alt={props.title} />
      </Modal>}
    </S.ProjectCard>
  )
}

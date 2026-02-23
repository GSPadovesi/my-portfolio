import { ImageUpscale } from 'lucide-react';
import { redirectToLink, toProjectSlug } from '../../utils';
import { useCallback, useState } from 'react';
import { Modal, Title, Paragraph, Button } from '../index';
import { useNavigate } from 'react-router-dom';
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
        <S.ProjectCardTitleGroup>
          <Title $variant='h4' $size='md' $fontFamily='Poppins' $fontWeight='600' $fontColor='#9857D3'>{props.enterprise}</Title>
          <Title $variant='h1' $size='2xl' $fontFamily='Poppins' $fontWeight='600' $fontColor='#CCD6F6'>{props.title}</Title>
        </S.ProjectCardTitleGroup>
        <S.InformationDescriptionContainer isOdd={props.isOld}>
          <Paragraph $balance={false} $size='sm'>{props.description}</Paragraph>
        </S.InformationDescriptionContainer>
        <S.ButtonsWrapper isOdd={props.isOld}>
          <Button $variant="primary" $size="large" disabled={!props.link.trim()} onClick={() => redirectToLink(props.link)}>Ir ao site oficial</Button>
          <Button $variant="secondary" $size="large" onClick={() => onNavigate(props.title)}>Ver mais sobre</Button>
        </S.ButtonsWrapper>
      </S.ProjectCardInformationContainer>
      <S.ProjectCardImageContainer isOdd={props.isOld}>
        <S.ProjectCardCover src={props.cover} alt={props.title} />
        <span><ImageUpscale onClick={() => setIsOpen(!isOpen)} /></span>
      </S.ProjectCardImageContainer>
      {!!isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <S.ProjectCardCover src={props.cover} alt={props.title} />
      </Modal>}
    </S.ProjectCard>
  )
}

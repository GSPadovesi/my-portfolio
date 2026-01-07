import { ImageUpscale } from 'lucide-react';
import { Button } from '../Button/Button';
import { Paragraph } from '../Paragraph/Paragraph';
import { Title } from '../Title/Title'
import * as S from './ProjectCard.styles'

export const ProjectCard = (props: any) => {
  console.log(props);
  return (
    <S.ProjectCard>
      <S.ProjectCardInformationContainer>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Title style={{ fontFamily: 'poppins' }} $variant='h4' $fontWeight='600' $fontColor='#9857D3'>{props.enterprise}</Title>
          <Title style={{ fontFamily: 'poppins' }} $variant='h1' $fontWeight='600' $fontColor='#CCD6F6'>{props.title}</Title>
        </div>
        <S.InformationDescriptionContainer>
          <Paragraph>{props.description}</Paragraph>
        </S.InformationDescriptionContainer>
        <Button $variant="primary" $size="large">IR AO SITE OFICIAL</Button>
      </S.ProjectCardInformationContainer>
      <S.ProjectCardImageContainer>
        <S.ProjectCardCover src={props.cover} alt={props.title} />
        <span><ImageUpscale /></span>
      </S.ProjectCardImageContainer>
    </S.ProjectCard>
  )
}
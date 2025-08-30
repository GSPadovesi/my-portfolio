import { useMemo } from 'react'
import { experienceinfoprops } from '../../sections/trajectory/Trajectory.constant'
import * as S from './ExperienceCard.styles'

export const ExperienceCard = ({ id, label, icon }: experienceinfoprops) => {

  return (
    <S.ExperienceCard id={`cardexperience-${id}`}>
      <div>
        <S.ExperienceCardCover src={icon} alt="Icone" />
      </div>
      <div style={{ flex: '1' }}>
        <S.TrajectoryParagraph>{label}</S.TrajectoryParagraph>
      </div>
    </S.ExperienceCard>
  )
}
import * as S from './Skills.styles'
import type { SkillsProps } from './Skills.types'



export const Skills = ({ color, icon, label }: SkillsProps) => {
  return (
    <S.Skills $color={color}>
      <S.SkillsContent>
        <img src={icon} alt='skill icon' />
        <S.SkillTitle $variant='h6' $color={color}>{label}</S.SkillTitle>
      </S.SkillsContent>
    </S.Skills>
  )
}

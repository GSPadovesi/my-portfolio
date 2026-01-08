import { Title } from '../Title/Title';
import * as S from './Skills.styles'

export const Skills = (props: any) => {
  console.log(props);
  return (
    <S.Skills $color={props.color}>
      <S.SkillsContent>
        <img src={props.icon} alt='skill icon' />
        <S.SkillTitle $variant='h6' $color={props.color}>{props.label}</S.SkillTitle>
      </S.SkillsContent>
    </S.Skills>
  )
}
import { Rocket } from 'lucide-react'
import { Button, Paragraph, Typewriter } from '../../components';
import { redirectToLink } from '../../utils';
import type { WelcomeProps } from './Welcome.types';
import * as S from './Welcome.styles';

export const Welcome = ({ id }: WelcomeProps) => {

  return (
    <S.Welcome id={id}>
      <S.WelcomePresentation>
        <S.WelcomePresentationContainer>
          <S.Cover src='/eu.png' alt='Foto de Gabriel Santana Padovesi' />
          <S.WelcomePresentationTextGroup>
            <S.WelcomePresentationSpan>Desenvolvedor <Rocket /></S.WelcomePresentationSpan>
            <S.WelcomePresentationTitle>full stack</S.WelcomePresentationTitle>
          </S.WelcomePresentationTextGroup>
        </S.WelcomePresentationContainer>
      </S.WelcomePresentation>
      <S.WelcomeInformation>
        <S.WelcomeInformationContainer>
          <S.WelcomeInformationContent>
            <S.WelcomeInformationLead>
              <Typewriter label='Desenvolvedor de software.' />
              <S.WelcomeInformationSpan>Atualmente trabalhando na empresa <a href='https://www.gastech.com.br/' target='_blank' rel='noreferrer noopener'>GAS TECH</a></S.WelcomeInformationSpan>
            </S.WelcomeInformationLead>
            <Paragraph $balance={false} $size='lg' $lineHeight='1.4'>Desenvolvedor de software, atuando na área há 2 anos. Crio sites e sistemas funcionais que equilibram a experiência do usuário com os objetivos do negócio, unindo estética, desempenho e propósito.</Paragraph>
            <S.WelcomeInformationWrapperButtons>
              <Button $variant='primary' $size='large' onClick={() => redirectToLink('https://wa.me/11947063723?&text=Ola, tudo bem?')}>Enviar Whatsapp</Button>
              <Button $variant='secondary' $size='large' onClick={() => redirectToLink('https://www.linkedin.com/in/gabriel-santana-padovesi-59b1041b7/')}><img src='/linkedinbutton.svg' alt='icone linkedin' /> Visitar meu linkedin</Button>
            </S.WelcomeInformationWrapperButtons>
          </S.WelcomeInformationContent>
        </S.WelcomeInformationContainer>
      </S.WelcomeInformation>
      <span className='line' />
    </S.Welcome>
  )
}





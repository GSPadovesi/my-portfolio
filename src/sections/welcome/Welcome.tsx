import { Rocket } from 'lucide-react'
import { Typewriter } from '../../components/Typewriter/Typewriter';
import { Button } from '../../components/Button/Button';
import { redirectToLink } from '../../utils/redirectToLink';
import Balancer from 'react-wrap-balancer';
import * as S from './Welcome.styles'

export const Welcome = (props: any) => {
  const { id } = props;

  return (
    <S.Welcome id={id}>
      <S.WelcomePresentation>
        <S.WelcomePresentationContainer>
          <S.Cover src='/eu.png' />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <S.WelcomePresentationSpan>Desenvolvedor <Rocket /></S.WelcomePresentationSpan>
            <S.WelcomePresentationTitle>full stack</S.WelcomePresentationTitle>
          </div>
        </S.WelcomePresentationContainer>
      </S.WelcomePresentation>
      <S.WelcomeInformation>
        <S.WelcomeInformationContainer>
          {/* <S.WelcomeInformationContent>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typewriter label='Sou desenvolvedor de software.' />
              <S.WelcomeInformationSpan>Atualmente trabalhando na empresa <a href='https://www.gastech.com.br/' target='_blank'>GAS TECH</a></S.WelcomeInformationSpan>
            </div>
            <S.WelcomeInformationParagraph>
              <Balancer>Desenvolvedor de software, atuando na área há mais 2 anos. Crio sites e sistemas funcionais que equilibram a experiência do usuário com os objetivos do negócio, unindo estética, desempenho e propósito.</Balancer>
            </S.WelcomeInformationParagraph>
            <S.WelcomeInformationWrapperButtons>
              <Button $variant='primary' $size='large' onClick={() => redirectToLink('https://wa.me/11947063723?&text=Ola, tudo bem?')}>Enviar Whatsapp</Button>
              <Button $variant='secondary' $size='large' style={{}} onClick={() => redirectToLink('https://www.linkedin.com/in/gabriel-santana-padovesi-59b1041b7/')}><img src='/linkedinbutton.svg' alt='icone linkedin' /> Visitar meu linkedin</Button>
            </S.WelcomeInformationWrapperButtons>
          </S.WelcomeInformationContent> */}
        </S.WelcomeInformationContainer>
      </S.WelcomeInformation>
    </S.Welcome>
  )
}
import { Typewriter } from '../../components/typewriter/Typewriter';
import { useCallback } from 'react';
import { redirectToLink } from '../../utils/redirectToLink';
import Balancer from 'react-wrap-balancer';
import * as S from './Information.styles'

export const Information = () => {

  return (
    <>
      <S.Information>
        <S.InformationContainer>
          <S.InformationContent>
            {/* <S.Icon src='/icon.svg' alt='icon' /> */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typewriter label='Sou desenvolvedor de software.' />
              <S.InformationSpan>Atualmente trabalhando na empresa <a href='https://www.gastech.com.br/' target='_blank'>GAS TECH</a></S.InformationSpan>
            </div>
            <S.InformationParagraph>
              <Balancer>Desenvolvedor de software, atuando na área há mais 2 anos. Crio sites e sistemas funcionais que equilibram a experiência do usuário com os objetivos do negócio, unindo estética, desempenho e propósito.</Balancer>
            </S.InformationParagraph>
            <S.InformationWrapperButtons>
              <S.InformationButton className='primary' onClick={() => redirectToLink('https://wa.me/11947063723?&text=Ola, tudo bem?')}>Enviar Whatsapp</S.InformationButton>
              <S.InformationButton className='secondary' style={{}} onClick={() => redirectToLink('https://www.linkedin.com/in/gabriel-santana-padovesi-59b1041b7/')}><img src='/linkedinbutton.svg' alt='icone linkedin' /> Visitar meu linkedin</S.InformationButton>
            </S.InformationWrapperButtons>
          </S.InformationContent>
          <div>
            <S.InfomartionDataContent>
              <S.InformationSpan>E-mail profissional: <strong>gspadovesi@gmail.com</strong></S.InformationSpan>
              <S.InformationSpan>Cidade: São Paulo - SP</S.InformationSpan>
              <S.InformationSpan>Idade: 24 anos</S.InformationSpan>
              <S.InformationSpan>CNPJ: 46.301.643/0001-76</S.InformationSpan>
            </S.InfomartionDataContent>
          </div>
        </S.InformationContainer>
        <span className='line' />
      </S.Information>
    </>
  )
}
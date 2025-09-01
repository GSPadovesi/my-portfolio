import Balancer from 'react-wrap-balancer';
import { Typewriter } from '../../components/typewriter/Typewriter';
import * as S from './Information.styles'

export const Information = (props: any) => {
  const { id } = props;

  return (
    <>
      <S.Information id={id}>
        <S.InformationContainer>
          <S.InformationContent>
            {/* <S.Icon src='/icon.svg' alt='icon' /> */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Typewriter label='Sou desenvolvedor de software.' />
              <S.InformationSpan>Atualmente trabalhando na empresa <a href='https://www.gastech.com.br/' target='_blank'>GAS TECH</a></S.InformationSpan>
            </div>
            <S.InformationParagraph>
              <Balancer>
                Desenvolvedor de software, atuando na área há mais 2 anos. Crio sites e sistemas funcionais que equilibram a experiência do usuário com os objetivos do negócio, unindo estética, desempenho e propósito.
              </Balancer>
            </S.InformationParagraph>
            <S.InformationWrapperButtons>
              <S.InformationButton style={{ backgroundColor: '#A254E9' }}>Enviar Whatsapp</S.InformationButton>
              <S.InformationButton style={{ backgroundColor: 'transparent', border: '1px solid #A254E9' }}><img src='/linkedinbutton.svg' alt='icone linkedin' /> Visitar meu linkedin</S.InformationButton>
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
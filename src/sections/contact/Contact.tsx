import { Title, MediaButton, Paragraph } from '../../components';
import { SocialNetworksData } from './Contact.constants';
import { redirectToLink } from '../../utils';
import type { ContactProps } from './Contact.types';
import * as S from './Contact.styles';

export const Contact = ({ id }: ContactProps) => {
  return (
    <S.Contact id={id}>
      <S.ContactContainer>
        <Title $variant='h1' $size='2xl' $fontWeight='600' $fontColor='#fff'>Minhas redes sociais e contato</Title>
        <S.NetworkSocialWrapper>
          {SocialNetworksData.map((media) => (
            <MediaButton
              key={media.id}
              icon={media.icon}
              disabled={!media.url.trim()}
              onClick={() => redirectToLink(media.url)}
            />
          ))}
        </S.NetworkSocialWrapper>
        <S.ContactInformation>
          <Title $variant='h3' $size='lg' $fontWeight='500' $fontColor='#fff'>Contato</Title>
          <S.ContactDescription $balance={false} $size='md' $fontWeight='600'>Atualmente, busco sempre inovar em novas experiências colaborativas e multidisciplinares. Também atuo em pequenos e médios projetos individuais, com foco em criar experiências digitais relevantes por meio de uma programação inovadora e bem pensada.</S.ContactDescription>
          <Paragraph $size='lg' $fontColor='#A254E9' $fontWeight='600'>Tem algum projeto em mente? Vamos conversar.</Paragraph>
          <Paragraph $size='md' $fontWeight='600'>Email: gspadovesi@gmail.com</Paragraph>
          <Paragraph $size='md' $fontWeight='600'>Telefone: +55 (11) 94706-3723</Paragraph>
        </S.ContactInformation>
      </S.ContactContainer>
    </S.Contact>
  )
}

import { Title, MediaButton, Paragraph } from '../../components';
import { SocialNetworksData } from './Contact.constants';
import { redirectToLink } from '../../utils';
import type { ContactProps } from './Contact.types';
import * as S from './Contact.styles';

export const Contact = ({ id }: ContactProps) => {
  return (
    <S.Contact id={id}>
      <S.ContactContainer>
        {/* <S.TrajectoryExperienceCover src='/skills.svg' alt='skills' /> */}
        <Title $variant='h1' $fontWeight='600' $fontColor='#fff'>Minhas redes sociais e contato</Title>
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
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Title $variant='h3' $fontWeight='500' $fontColor='#fff'>Contato</Title>
          <Paragraph style={{ maxWidth: '600px', alignSelf: 'flex-start' }} $fontWeight='600'>Atualmente, busco sempre inovar em novas experiências colaborativas e multidisciplinares. Também atuo em pequenos e médios projetos individuais, com foco em criar experiências digitais relevantes por meio de uma programação inovadora e bem pensada.</Paragraph>
          <Paragraph $fontColor='#A254E9' $fontWeight='600'>Tem algum projeto em mente? Vamos conversar. </Paragraph>
          <Paragraph $fontWeight='600'>📩 gspadovesi@gmail.com</Paragraph>
          <Paragraph $fontWeight='600'> 📞 +55 (11) 94706-3723</Paragraph>
        </div>
      </S.ContactContainer>
    </S.Contact>
  )
}

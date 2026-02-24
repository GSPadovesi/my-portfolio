import { useCallback, useEffect, useRef, useState } from 'react';
import { Title, MediaButton, ContactForm, notify } from '../../components';
import { SocialNetworksData } from './Contact.constants';
import { redirectToLink } from '../../utils';
import type { ContactProps } from './Contact.types';
import * as S from './Contact.styles';

export const Contact = ({ id }: ContactProps) => {
  const [isSend, setIsSend] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const requestControllerRef = useRef<AbortController | null>(null);
  const isMountedRef = useRef(true);

  const handleSubmit = useCallback(async (name: string, email: string, message: string) => {
    if (isLoading) return;
    if (!name || !email || !message) {
      notify.error('Por favor, preencha todos os campos antes de enviar.');
      return;
    }

    requestControllerRef.current?.abort();
    const controller = new AbortController();
    requestControllerRef.current = controller;

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) throw new Error('Erro ao enviar a mensagem');

      if (!isMountedRef.current) return;

      setIsSend(true);
      notify.success('Mensagem enviada com sucesso.');
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      if (!isMountedRef.current) return;
      notify.error(error instanceof Error ? error.message : 'Nao foi possivel enviar a mensagem.');
    } finally {
      if (isMountedRef.current) setIsLoading(false);

      if (requestControllerRef.current === controller) requestControllerRef.current = null;

    }
  }, [isLoading]);

  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
      requestControllerRef.current?.abort();
    };
  }, []);

  return (
    <S.Contact id={id}>
      <S.ContactContainer>
        <Title $variant='h1' $size='2xl' $fontWeight='600' $fontColor='#A254E9'>Minhas redes sociais e contato</Title>
        <S.NetworkSocialWrapper>
          {SocialNetworksData.map((media) => (
            <MediaButton
              key={media.id}
              icon={media.icon}
              tooltip={media.value}
              disabled={!media.url.trim()}
              onClick={() => redirectToLink(media.url)}
            />
          ))}
        </S.NetworkSocialWrapper>
        <S.ContactInformation>
          <Title $variant='h3' $size='lg' $fontWeight='500' $fontColor='#A254E9'>Contato</Title>
          <S.ContactDescription $balance={false} $size='md' $fontWeight='600'>Atualmente, busco sempre inovar em novas experiências colaborativas e multidisciplinares. Também atuo em pequenos e médios projetos individuais, com foco em criar experiências digitais relevantes por meio de uma programação inovadora e bem pensada.</S.ContactDescription>
        </S.ContactInformation>
        <S.ContactFormWrapper>
          <ContactForm onSubmit={handleSubmit} isSend={isSend} loading={isLoading} />
        </S.ContactFormWrapper>
      </S.ContactContainer>
    </S.Contact>
  )
}

import React, { useCallback, useMemo, useState } from 'react';
import { Button, Field, Paragraph, Title } from '..';
import type { ContactFormProps } from './ContactForm.types';
import * as S from './ContactForm.styles';

const emailRegex = /\S+@\S+\.\S+/;

export const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, isSend = false, loading = false }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const errors = useMemo(() => {
    return {
      name: name.trim().length === 0 ? 'Campo obrigatorio' : '',
      email: email.trim().length === 0 ? 'Campo obrigatorio' : !emailRegex.test(email) ? 'E-mail invalido' : '',
      message: message.trim().length === 0 ? 'Campo obrigatorio' : '',
    };
  }, [name, email, message]);

  const hasError = useMemo(() => Object.values(errors).some((error) => error.length > 0), [errors]);
  const isEmpty = useMemo(() => name.trim().length === 0 && email.trim().length === 0 && message.trim().length === 0, [name, email, message]);

  const handleFormSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (hasError || loading) return;

    setTouched({ name: true, email: true, message: true });
    await onSubmit(name.trim(), email.trim(), message.trim());
  }, [hasError, loading, onSubmit, name, email, message]);

  if (isSend) {
    return (
      <S.FormCard>
        <S.SuccessState>
          <Title $variant='h3' $size='lg' $fontColor='#fff'>Mensagem enviada</Title>
          <Paragraph $size='md' $balance={false}>
            Obrigado pelo contato. Em breve, entrarei em contato para conversarmos sobre o seu projeto e como posso ajudar a torná-lo realidade.
          </Paragraph>
        </S.SuccessState>
      </S.FormCard>
    );
  }

  return (
    <S.FormCard>
      <S.FormIntro>
        <Title $variant='h3' $fontColor='#A254E9'>Tem algum projeto em mente? Vamos conversar.</Title>
        <Paragraph $size='md' $balance={false}>Preencha os campos abaixo para iniciar o contato.</Paragraph>
      </S.FormIntro>

      <S.Form onSubmit={handleFormSubmit}>
        <Field
          type='input'
          id='contact-name'
          name='name'
          label='Nome'
          placeholder='Digite seu nome completo'
          value={name}
          onChange={(event) => setName(event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, name: true }))}
          error={touched.name ? errors.name : ''}
        />

        <Field
          type='input'
          id='contact-email'
          name='email'
          inputType='email'
          label='E-mail'
          placeholder='Digite seu e-mail'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, email: true }))}
          error={touched.email ? errors.email : ''}
        />

        <Field
          type='textarea'
          id='contact-message'
          name='message'
          label='Mensagem'
          placeholder='Descreva brevemente seu projeto'
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onBlur={() => setTouched((current) => ({ ...current, message: true }))}
          error={touched.message ? errors.message : ''}
        />

        <Button type='submit' $variant='primary' $size='medium' disabled={loading || hasError || isEmpty}>
          {loading ? 'Enviando...' : 'Enviar contato'}
        </Button>
      </S.Form>
    </S.FormCard>
  );
};

ContactForm.displayName = 'ContactForm';

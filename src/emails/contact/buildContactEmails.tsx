import type { ContactEmailPayload, ContactEmailTemplate, ContactEmailsResult } from './ContactEmail.types';
import { ContactOwnerEmail } from './ContactOwnerEmail';
import { ContactUserEmail } from './ContactUserEmail';

export const buildContactEmails = (payload: ContactEmailPayload): ContactEmailsResult => {
  const owner: ContactEmailTemplate = {
    subject: `Novo contato do portfolio - ${payload.name}`,
    text: [
      'Novo contato recebido pelo formulario do portfolio.',
      ' ',
      `Nome: ${payload.name}`,
      `E-mail: ${payload.email}`,
      ' ',
      'Mensagem:',
      payload.message,
    ].join('\n'),
    html: ContactOwnerEmail(payload),
  };

  const user: ContactEmailTemplate = {
    subject: 'Recebemos sua mensagem - Portfolio Gabriel Padovesi',
    text: [
      `Oi ${payload.name},`,
      ' ',
      'Sua mensagem foi recebida com sucesso.',
      'Em breve retorno com os proximos passos.',
      ' ',
      'Resumo da sua mensagem:',
      payload.message,
      '',
      'Obrigado pelo contato.',
    ].join('\n'),
    html: ContactUserEmail(payload),
  };

  return { owner, user };
};

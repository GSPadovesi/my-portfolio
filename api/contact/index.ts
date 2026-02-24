import type { VercelRequest, VercelResponse } from '@vercel/node';
import { buildContactEmails } from '../../src/emails/contact/index.js';
import { transporter } from '../../src/utils/transporter.js';

const EMAIL_REGEX = /\S+@\S+\.\S+/;
 const EMAIL_USER = process.env.EMAIL_USER;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodo nao permitido' });

  const body = req.body;
  if (!body) return res.status(400).json({ error: 'Corpo da requisicao invalido' });
  if (!EMAIL_USER) return res.status(500).json({ error: 'Configuracao de e-mail incompleta' });
  if(body.email && !EMAIL_REGEX.test(body.email)) return res.status(400).json({ error: 'Email invalido' });
  

  try {
    const { owner, user } = buildContactEmails(body);

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      replyTo: body.email,
      subject: owner.subject,
      text: owner.text,
      html: owner.html,
    });

    await transporter.sendMail({
      from: EMAIL_USER,
      to: body.email,
      subject: user.subject,
      text: user.text,
      html: user.html,
    });

    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar envio de contato:', error);
    return res.status(500).json({ error: 'Erro ao enviar a mensagem' });
  }
}

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Metodo nao permitido' });

  const body = req.body;

  if (!body) return res.status(400).json({ error: 'Corpo da requisicao invalido' });

  try {
    // await transporter.sendMail({
    //   from: emailUser,
    //   to: emailTo,
    //   replyTo: payload.email,
    //   subject: ownerSubject,
    //   text: ownerText,
    // });

    // await transporter.sendMail({
    //   from: emailUser,
    //   to: payload.email,
    //   subject: userSubject,
    //   text: userText,
    // });

    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro ao processar envio de contato:', error);
    return res.status(500).json({ error: 'Erro ao enviar a mensagem' });
  }
}
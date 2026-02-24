import type { ContactEmailPayload } from './ContactEmail.types.js';
import { escapeHtml, messageHtml } from './messageHtml.js';

export const ContactUserEmail = (payload: ContactEmailPayload): string => `
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f3f4f6;padding:24px 12px;">
  <tbody>
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:640px;background-color:#ffffff;border-radius:12px;">
          <tbody>
            <tr>
              <td style="padding:24px;background-color:#a254e9;border-top-left-radius:12px;border-top-right-radius:12px;">
                <p style="margin:0;font-family:Arial,sans-serif;font-size:20px;font-weight:700;color:#ffffff;">Mensagem recebida</p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;font-family:Arial,sans-serif;color:#111827;font-size:14px;line-height:22px;">
                <p style="margin:0 0 10px 0;">Oi ${escapeHtml(payload.name)}, obrigado pelo contato.</p>
                <p style="margin:0 0 10px 0;">Sua mensagem foi recebida com sucesso. Em breve retorno com os proximos passos.</p>
                <p style="margin:18px 0 6px 0;"><strong>Resumo enviado:</strong></p>
                <p style="margin:0;white-space:pre-line;">${messageHtml(payload.message)}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>
`;

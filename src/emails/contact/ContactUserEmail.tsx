import type { ContactEmailPayload } from './ContactEmail.types';

interface ContactUserEmailProps {
  payload: ContactEmailPayload;
}

export const ContactUserEmail: React.FC<ContactUserEmailProps> = ({ payload }) => {
  const { name, message } = payload;

  return (
    <table width='100%' cellPadding={0} cellSpacing={0} border={0} style={{ backgroundColor: '#f3f4f6', padding: '24px 12px' }}>
      <tbody>
        <tr>
          <td align='center'>
            <table width='640' cellPadding={0} cellSpacing={0} border={0} style={{ width: '100%', maxWidth: 640, backgroundColor: '#ffffff', borderRadius: 12 }}>
              <tbody>
                <tr>
                  <td style={{ padding: '24px', backgroundColor: '#a254e9', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                    <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 20, fontWeight: 700, color: '#ffffff' }}>
                      Mensagem recebida
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '24px', fontFamily: 'Arial, sans-serif', color: '#111827', fontSize: 14, lineHeight: '22px' }}>
                    <p style={{ margin: '0 0 10px 0' }}>Oi {name}, obrigado pelo contato.</p>
                    <p style={{ margin: '0 0 10px 0' }}>
                      Sua mensagem foi recebida com sucesso. Em breve retorno com os proximos passos.
                    </p>
                    <p style={{ margin: '18px 0 6px 0' }}><strong>Resumo enviado:</strong></p>
                    <p style={{ margin: 0, whiteSpace: 'pre-line' }}>{message}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

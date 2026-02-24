import type { ContactEmailPayload } from './ContactEmail.types';

interface ContactOwnerEmailProps {
  payload: ContactEmailPayload;
}

export const ContactOwnerEmail: React.FC<ContactOwnerEmailProps> = ({ payload }) => {
  const { name, email, message } = payload;

  return (
    <table width='100%' cellPadding={0} cellSpacing={0} border={0} style={{ backgroundColor: '#f3f4f6', padding: '24px 12px' }}>
      <tbody>
        <tr>
          <td align='center'>
            <table width='640' cellPadding={0} cellSpacing={0} border={0} style={{ width: '100%', maxWidth: 640, backgroundColor: '#ffffff', borderRadius: 12 }}>
              <tbody>
                <tr>
                  <td style={{ padding: '24px', backgroundColor: '#1f2937', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                    <p style={{ margin: 0, fontFamily: 'Arial, sans-serif', fontSize: 20, fontWeight: 700, color: '#ffffff' }}>
                      Novo contato recebido
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '24px', fontFamily: 'Arial, sans-serif', color: '#111827', fontSize: 14, lineHeight: '22px' }}>
                    <p style={{ margin: '0 0 8px 0' }}><strong>Nome:</strong> {name}</p>
                    <p style={{ margin: '0 0 8px 0' }}><strong>E-mail:</strong> {email}</p>
                    <p style={{ margin: '16px 0 6px 0' }}><strong>Mensagem:</strong></p>
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

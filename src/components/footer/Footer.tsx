import { Paragraph } from "../Paragraph/Paragraph"

export const Footer = () => {
  return <div style={{ width: '100%', minHeight: '50px', backgroundColor: "#A254E9", display: 'flex', justifyContent: 'center', padding: 16 }}>
    <Paragraph style={{ width: '100%' }} $textAlign="center">© 2026 Gabriel Santana — Desenvolvedor Web. Todos os direitos reservados.</Paragraph>
  </div>
}
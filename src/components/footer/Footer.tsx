import { Paragraph } from "../Paragraph/Paragraph"

export const Footer = () => {
  return <div style={{ width: '100%', minHeight: '50px', backgroundColor: "#A254E9", paddingTop: 16, display: 'flex', justifyContent: 'center' }}>
    <Paragraph $textAlign="center">© 2026 Gabriel Santana — Desenvolvedor Web. Todos os direitos reservados.</Paragraph>
  </div>
}
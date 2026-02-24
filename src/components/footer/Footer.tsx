import { Paragraph } from "../Paragraph"
import { FooterContainer } from "./Footer.styles"

export const Footer = () => {
  return (
    <FooterContainer>
      <Paragraph $size='sm' $balance={true} $textAlign="center">
        © 2026 Gabriel Santana - Desenvolvedor Web. Todos os direitos reservados.
      </Paragraph>
    </FooterContainer>
  )
}

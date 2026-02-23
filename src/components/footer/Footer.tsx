import styled from "styled-components";
import { Paragraph } from "../index";

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: #A254E9;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const FooterText = styled(Paragraph)`
  width: 100%;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterText $size='sm' $balance={false} $textAlign="center">
        © 2026 Gabriel Santana - Desenvolvedor Web. Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  )
}

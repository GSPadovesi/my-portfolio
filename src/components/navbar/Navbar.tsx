import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Balancer from "react-wrap-balancer";
import * as S from './Navbar.styles'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Navbar>
      <S.Container>
        <S.Text><Balancer>Gabriel Santana</Balancer></S.Text>
        <S.MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={22} />
        </S.MobileMenuIcon>
        <div className='desktoplist'>
          <S.NavLinks>
            <a href="#inicio">Início</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#experiencia">Experiência</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </S.NavLinks>
          <S.WhatsAppButton>Enviar Whatsapp</S.WhatsAppButton>
        </div>
      </S.Container>
      <S.SideMenu isOpen={isOpen}>
        <S.CloseIcon onClick={() => setIsOpen(!isOpen)}>
          <FiX />
        </S.CloseIcon>
        <S.SideMenuLinks>
          <a href="#inicio">Início</a>
          <a href="#trajetoria">Trajetória</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </S.SideMenuLinks>
        <S.WhatsAppCircle>
          <FaWhatsapp size={32} />
        </S.WhatsAppCircle>
        <S.Chatbot>
          <img src="/icon.svg" alt="Chatbot Avatar" />
          <span>Chatbot!</span>
        </S.Chatbot>
      </S.SideMenu>
    </S.Navbar>
  )
}
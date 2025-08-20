import { FiMenu, FiX } from "react-icons/fi";
import { useEffect, useState, useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { navItems } from "./Navbar.constants";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import Balancer from "react-wrap-balancer";
import * as S from './Navbar.styles'
import { scrollToSection } from "../../utils/scrollToSection";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const activeSection = useScrollSpy();
  const onClick = useCallback((id: any) => { scrollToSection(id); setIsOpen(false) }, []);


  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 10) };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto' };
  }, [isOpen]);


  return (
    <S.Navbar $isScrolled={isScrolled}>
      <S.Container>
        <S.Text><Balancer>Gabriel Santana</Balancer></S.Text>
        <S.MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
          <FiMenu size={22} />
        </S.MobileMenuIcon>
        <div className='desktoplist'>
          <S.NavLinks>
            {navItems.map((item: any, index: number) => (
              <S.SideMenuItem key={index} $isActive={item.id === activeSection} onClick={onClick}>{item.label}</S.SideMenuItem>
            ))}
          </S.NavLinks>
          <S.WhatsAppButton>Enviar Whatsapp</S.WhatsAppButton>
        </div>
      </S.Container>
      <S.SideMenu isOpen={isOpen}>
        <S.CloseIcon onClick={() => setIsOpen(!isOpen)}>
          <FiX />
        </S.CloseIcon>
        <S.SideMenuLinks>
          {navItems.map((item: any, index: number) => (
            <S.SideMenuItem key={index} $isActive={item.id === activeSection} onClick={onClick}>{item.label}</S.SideMenuItem>
          ))}
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
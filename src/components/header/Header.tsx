import { useEffect, useState, useCallback } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { navItems } from "./Header.constants";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { scrollToSection } from "../../utils/scrollToSection";
import { HeaderHamburguer } from "./HeaderHamburguer/HeaderHamburguer";
import { redirectToLink } from "../../utils/redirectToLink";
import Balancer from "react-wrap-balancer";
import * as S from './Header.styles'

export const Header = () => {
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
    <S.Header $isScrolled={isScrolled}>
      <S.Container>
        <S.Text><Balancer>Gabriel Santana</Balancer></S.Text>
        <S.MobileMenuIcon onClick={() => setIsOpen(!isOpen)}>
          <HeaderHamburguer isOpen={isOpen} setIsOpen={setIsOpen} />
        </S.MobileMenuIcon>
        <div className='desktoplist'>
          <S.NavLinks>
            {navItems.map((item: any, index: number) => (
              <S.SideMenuItem key={index} $isActive={item.id === activeSection} onClick={() => onClick(item.id)}>{item.label}</S.SideMenuItem>
            ))}
          </S.NavLinks>
          <S.WhatsAppButton onClick={() => redirectToLink('https://wa.me/11947063723?&text=Ola, tudo bem?')}>Enviar Whatsapp</S.WhatsAppButton>
        </div>
      </S.Container>
      <S.SideMenu isOpen={isOpen}>
        <S.SideMenuLinks>
          {navItems.map((item: any, index: number) => (
            <S.SideMenuItem key={index} $isActive={item.id === activeSection} onClick={() => onClick(item.id)}>{item.label}</S.SideMenuItem>
          ))}
        </S.SideMenuLinks>
        <S.WhatsAppCircle onClick={() => redirectToLink('https://wa.me/11947063723?&text=Ola, tudo bem?')}>
          <FaWhatsapp size={32} />
        </S.WhatsAppCircle>
        <S.Chatbot>
          <img src="/icon.svg" alt="Chatbot Avatar" />
          <span>Chatbot!</span>
        </S.Chatbot>
      </S.SideMenu>
    </S.Header>
  )
}
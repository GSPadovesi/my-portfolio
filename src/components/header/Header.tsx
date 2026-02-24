import { useEffect, useState, useCallback, useMemo } from "react";
import { navItems } from "./Header.constants";
import { useScrollSpy } from "../../hooks";
import { scrollToSection, redirectToLink } from "../../utils";
import { HeaderHamburguer } from "./HeaderHamburguer/HeaderHamburguer";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../index";
import Balancer from "react-wrap-balancer";
import * as S from './Header.styles'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const activeSection = useScrollSpy();
  const isProjectPage = useMemo(() => location.pathname.includes('project'), [location]);
  const navigate = useNavigate();
  const onClick = useCallback((id: string) => { scrollToSection(id); setIsOpen(false) }, []);
  const onBack = useCallback(() => { navigate('/') }, [navigate]);

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

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', onEscape);
    return () => window.removeEventListener('keydown', onEscape);
  }, []);

  return (
    <S.Header $isScrolled={isScrolled}>
      <S.Container>
        <S.Text><Balancer>Gabriel Santana</Balancer></S.Text>
        <S.MobileMenuIcon
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls='header-mobile-menu'
          aria-label={isOpen ? 'Fechar menu de navegacao' : 'Abrir menu de navegacao'}
        >
          <HeaderHamburguer isOpen={isOpen} />
        </S.MobileMenuIcon>
        <div className='desktoplist'>
          {!isProjectPage && <S.NavLinks aria-label='Navegacao principal'>
            {navItems.map((item, index: number) => (
              <S.SideMenuItem type='button' key={index} $isActive={item.id === activeSection} onClick={() => onClick(item.id)}>{item.label}</S.SideMenuItem>
            ))}
          </S.NavLinks>}
          <S.ActionGroup>
            {isProjectPage && <Button $variant="primary" onClick={onBack}>Voltar para a pagina principal</Button>}
            <S.WhatsAppButton type='button' onClick={() => redirectToLink('https://wa.me/11947063723?&text=Ola, tudo bem?')} aria-label='Enviar mensagem no WhatsApp'>Enviar Whatsapp</S.WhatsAppButton>
          </S.ActionGroup>
        </div>
      </S.Container>
      <S.SideMenu id='header-mobile-menu' isOpen={isOpen}>
        <S.SideMenuLinks aria-label='Navegacao mobile'>
          {!isProjectPage ? navItems.map((item, index: number) => (
            <S.SideMenuItem type='button' key={index} $isActive={item.id === activeSection} onClick={() => onClick(item.id)}>{item.label}</S.SideMenuItem>
          )) : <Button $variant="primary" onClick={onBack}>Voltar para home</Button>}
        </S.SideMenuLinks>
      </S.SideMenu>
    </S.Header>
  )
}

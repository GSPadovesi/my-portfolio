import styled, { css } from "styled-components"

export const Navbar = styled.header`
  width: 100%;
  height: 100px;
  position: sticky;
  top: 0%;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.navbar};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  z-index: ${({ theme }) => theme.zIndex.navbar};
`

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  
  .desktoplist{
    display: none;
    gap: 32px;

    @media(min-width: 770px){
      display: flex;
    }
  }
`

export const Text = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  font-family: ${({ theme }) => theme.fontFamily.roboto};
  font-size: ${({ theme }) => theme.fontSize.xxl};

  @media(min-width: 768px){
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`

export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  a {
    color: #fff;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily.plusJakarta};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.xl};

    &:hover{
      color: ${({ theme }) => theme.colors.primary.hover};
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const WhatsAppButton = styled.button`
  width: 200px;
  height: 40px;
  background-color: #A254E9;
  border: none;
  padding: 8px 16px;
  color: #fff;
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamily.poppins};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  &:hover {
    background-color: #843dbe;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuIcon = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const SideMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 320px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);  
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px; 
  z-index: ${({ theme }) => theme.zIndex.overlay};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "20px")});
  transition: all 0.3s ease-in-out;
`;


export const CloseIcon = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
`;

export const SideMenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;

  a {
    color: #fff;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily.plusJakarta};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.xl};

    &:hover{
      color: ${({ theme }) => theme.colors.primary.hover};
    }
  }
`;

export const WhatsAppCircle = styled.div`
  background-color: #25d366;
  color: #fff;
  padding: 20px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.circle};
`;

export const Chatbot = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadows.circle};
  background-color: #fff;
  border-radius: 50%;

  img {
    width: 64px;
    height: 64px;
    border-radius: 999px;
  }

  span {
    background-color: #fff;
    color: #000;
    font-size: 0.75rem;
    padding: 2px 6px;
    margin-top: 4px;
    border-radius: 4px;
  }
`;
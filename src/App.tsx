import { useContext, useState } from 'react'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { FaWhatsapp } from "react-icons/fa";
import { ThemeContext } from './context/ThemeContext';
import { Welcome } from './sections/welcome/Welcome';
import { Information } from './sections/information/Information';
import { Trajectory } from './sections/trajectory/Trajectory';
import * as S from './App.styles'

function App() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <S.Content>
        <Welcome id='inicio-section' />
        <Information id='information-section' />
        <Trajectory id='trajetoria-section' />
        <div style={{ minHeight: '100dvh' }}>
          <h1 style={{ textAlign: 'center', fontSize: '48px', color: '#fff' }}>Continua...</h1>
        </div>
      </S.Content>
      <div style={{ position: 'fixed', right: '60px', bottom: '120px' }}>
        <S.ButtonModeTemporary onClick={() => setThemeName(themeName === "theme" ? "darkTheme" : "theme")}>Theme</S.ButtonModeTemporary>
        <S.WhatsAppCircle>
          <FaWhatsapp size={32} />
        </S.WhatsAppCircle>
      </div>
      <Footer />
    </>
  )
}

export default App

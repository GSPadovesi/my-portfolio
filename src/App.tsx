import { useContext, useState } from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Footer } from './components/footer/Footer'
import { FaWhatsapp } from "react-icons/fa";
import { ThemeContext } from './context/ThemeContext';
import { Main } from './sections/main/Main';
import * as S from './App.styles'

function App() {
  const { themeName, setThemeName } = useContext(ThemeContext);
  const [count, setCount] = useState(0)


  return (
    <>
      <Navbar />
      <S.Content>
        <Main />
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

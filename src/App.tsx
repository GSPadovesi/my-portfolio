import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Welcome } from './sections/welcome/Welcome';
import { Trajectory } from './sections/trajectory/Trajectory';
import { Project } from './sections/projects/Projects';
import { Contact } from './sections/contact/contact';
import * as S from './App.styles'

function App() {
  // const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Welcome id='inicio-section' />
      <Trajectory id='trajetoria-section' />
      <Project id='projetos-section' />
      <Contact id='contato-section' />
      <Footer />
      {/* 
        
        
        <div style={{ minHeight: '100dvh' }}>
        </div> */}
      {/* <div style={{ position: 'fixed', right: '60px', bottom: '120px' }}>
        <S.ButtonModeTemporary onClick={() => setThemeName(themeName === "theme" ? "darkTheme" : "theme")}>Theme</S.ButtonModeTemporary>
        <S.WhatsAppCircle>
          <FaWhatsapp size={32} />
        </S.WhatsAppCircle>
      </div> */}
    </>
  )
}

export default App

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProjectPage } from './pages/ProjectPage';

function App() {
  // const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='project/:projectName' element={<ProjectPage />} />
      </Routes>
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

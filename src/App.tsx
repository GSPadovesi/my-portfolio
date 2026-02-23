import { Header, Footer } from './components'
import { Route, Routes } from 'react-router-dom';
import { HomePage, ProjectPage } from './pages';

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
    </>
  )
}

export default App


{/* 
        
        
        <div style={{ minHeight: '100dvh' }}>
        </div> */}
{/* <div style={{ position: 'fixed', right: '60px', bottom: '120px' }}>
        <S.ButtonModeTemporary onClick={() => setThemeName(themeName === "theme" ? "darkTheme" : "theme")}>Theme</S.ButtonModeTemporary>
        <S.WhatsAppCircle>
          <FaWhatsapp size={32} />
        </S.WhatsAppCircle>
      </div> */}
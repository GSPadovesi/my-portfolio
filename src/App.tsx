import { Header, Footer, AppToast } from './components'
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
      <AppToast />
    </>
  )
}

export default App;
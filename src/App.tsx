import { Header, Footer, AppToast } from './components'
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='project/:projectName' element={<ProjectPage />} /> */}
      </Routes>
      <Footer />
      <AppToast />
    </>
  )
}

export default App;

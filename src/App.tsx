import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppToast } from './components/Toast';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
      <AppToast />
    </>
  )
}

export default App;

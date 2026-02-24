import { Route, Routes } from 'react-router-dom';
import { Header, Footer, AppToast } from './components';
import { HomePage } from './pages';

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

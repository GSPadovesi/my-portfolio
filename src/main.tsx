import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Main, GlobalStyles } from './styles'
import { ThemeProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider >
      <GlobalStyles />
      <BrowserRouter>
        <Main>
          <App />
        </Main>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

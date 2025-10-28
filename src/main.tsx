import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles' // ou o caminho correto no seu projeto
import { ThemeProvider } from './context/ThemeContext.tsx'
import { Main } from './styles/MainStyle.ts'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider >
      <GlobalStyles />
      <Main>
        <App />
      </Main>
    </ThemeProvider>
  </StrictMode>,
)

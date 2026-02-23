import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Main, GlobalStyles } from './styles'
import { ThemeProvider } from './context'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-wrap-balancer'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider >
      <Provider>
        <GlobalStyles />
        <BrowserRouter>
          <Main>
            <App />
          </Main>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)

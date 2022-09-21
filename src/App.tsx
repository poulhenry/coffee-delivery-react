import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'
import Router from './Router'
import { defaultTheme, GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './contexts/CartContext'
import './index.css'
import App from './app/App.tsx'

// Initialize the app with React Router and Cart Provider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)

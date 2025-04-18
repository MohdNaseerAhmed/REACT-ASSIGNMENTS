import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginContext from './contexts/LoginContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContext>
      <App />
    </LoginContext>
  </StrictMode>,
)

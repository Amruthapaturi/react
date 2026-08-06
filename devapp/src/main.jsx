import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { NameProvide } from './ContextAPI/LandContext.jsx'
import { ThemeProvide } from './ContextAPI/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<NameProvide>
     <ThemeProvide>
     <App />
     </ThemeProvide>
  </NameProvide>  
  </StrictMode>,
)

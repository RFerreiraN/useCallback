import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { UseCallBackComponent } from './Components/UseCallBackComponent'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCallBackComponent/>
  </StrictMode>,
)

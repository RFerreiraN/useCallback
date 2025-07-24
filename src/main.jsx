import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ComponentUseCallBack } from './Components/ComponentUseCallBack'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComponentUseCallBack/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Expertise from './components/Expertise.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Expertise />
  </StrictMode>
)

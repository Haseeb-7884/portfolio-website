import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Expertise from './components/Expertise.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Expertise />
    <Projects />
    <Skills />
  </StrictMode>
)

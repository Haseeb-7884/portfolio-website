import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Expertise from './components/Expertise.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Educations from './components/Educations.jsx'
import Blogs from './components/Blogs.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Expertise />
    <Projects />
    <Skills />
    <Educations />
    {/* <Blogs /> */}
    <Contact />
    <Footer />
  </StrictMode>
)

import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from './Header'
import { Footer } from './Footer'
import { ManiContent } from './MainContent'
import { Facts } from './Facts.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
   <StrictMode>
      <Header />
      <Facts />
      <ManiContent/>
      <Footer />
   </StrictMode>
)




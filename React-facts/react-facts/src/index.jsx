import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Header } from "./Header.jsx"
import { Footer } from "./Footer.jsx"
import { ManiContent } from "./MainContent.jsx"
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


 

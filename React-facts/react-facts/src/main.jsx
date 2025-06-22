import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactlogo from './assets/react.svg'
import './index.css'

 createRoot(document.getElementById('root')).render(
  <main>
     <img src={reactlogo} alt="" />
     <h1>React Facts</h1>
     <ul>
      <li>Was first released in 2013 </li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 200k stars on Github</li>
      <li>Is maintained by Meta</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
     </ul>
  </main>
 
)

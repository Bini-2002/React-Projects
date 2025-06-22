import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import reactlogo from './assets/react.svg'
import './index.css'

function App(
) {
   return (
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
}

function Page() {
   return (
      <div>
         <header>
            <img src={reactlogo} alt="" />
         </header>
         <main>
            <h1>Exiting thigs about to learn react</h1>
            <ol>
               <li>It's is easy</li>
               <li>It has large community</li>
               <li>It's is job demanding</li>
            </ol>
         </main>
         <footer>
            <small>© 2025 React Facts. All rights reserved.</small>
         </footer>
      </div>
   )
}

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <App />
      <Page />
   </StrictMode>
)




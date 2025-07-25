import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
//import App from './App.jsx'
import StarRating from './StarRating.jsx'

function Test(){
  const [movieRating , setmovieRating] = useState(0);

  return(
    <div>
      <StarRating color = 'blue' maxRating = {10} onSetRating = {setmovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  ) 
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <Test />
    <StarRating maxRating={5} />
    <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Excellent']} defaultRating={3} />

  </StrictMode>,
)

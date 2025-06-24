import './index.css'

export function Facts(
) {
   return (
      <main className='facts'>
         <h1 className='facts-title'>React Facts</h1>
         <ul className='facts-list'>
            <li className='facts-list-item'>Was first released in 2013 </li>
            <li className='facts-list-item'>Was originally created by Jordan Walke</li>
            <li className='facts-list-item'>Has well over 200k stars on Github</li>
            <li className='facts-list-item'>Is maintained by Meta</li>
            <li className='facts-list-item'>Powers thousands of enterprise apps, including mobile apps</li>
         </ul>
      </main>
   )
}

export default Facts;
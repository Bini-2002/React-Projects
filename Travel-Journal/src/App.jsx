import Header from './components/Header.jsx'
import Entry from './components/Entry.jsx'
import './index.css'
import data from './data'


export default function App() {

  const entryElement = data.map((entry)=>{
    return(
      <Entry 
        key={entry.id} 
        entry={entry}
      />
    )
  })


  return (
    <>
      <Header/>
      <main className='containe'>
        {entryElement}
      </main>
    </>
  )
}



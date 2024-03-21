import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const apiURL = "https://grocery-list-0aqm.onrender.com";

function App() {
  const [areListsVisible, setAreListsVisible] = useState(true);
  const [lists, setLists] = useState([]);

  return (
    <>
      <div className='container'>

      </div>
    </>
  )
}

export default App

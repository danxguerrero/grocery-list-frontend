import { useEffect, useState } from 'react'
import './App.css'
import { MenuBar } from './components/MenuBar'
import { Footer } from './components/Footer'

const apiURL = "https://grocery-list-0aqm.onrender.com";

function App() {
  const [areListsVisible, setAreListsVisible] = useState(true);
  const [lists, setLists] = useState([]);

  return (
    <div className="h-full w-full flex flex-col">
      <MenuBar />
      <div className="h-full flex-grow">Hello World</div>
      <Footer />
    </div>
  )
}

export default App

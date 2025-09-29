import { useEffect, useState } from 'react'
import './App.css'

const apiURL = "https://grocery-list-0aqm.onrender.com";

function App() {
  const [areListsVisible, setAreListsVisible] = useState(true);
  const [lists, setLists] = useState([]);

  return (
    <div className="border-2 border-red-500 h-full w-full">
      <h1>Hello World</h1>
    </div>
  )
}

export default App

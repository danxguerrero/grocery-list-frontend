import { Card, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import './App.css'
import { MenuBar } from './components/MenuBar'

const apiURL = "https://grocery-list-0aqm.onrender.com";

function App() {
  const [areListsVisible, setAreListsVisible] = useState(true);
  const [lists, setLists] = useState([]);

  return (
    <>
      <MenuBar />
      <Card className='container'>
        
      </Card>
    </>
  )
}

export default App

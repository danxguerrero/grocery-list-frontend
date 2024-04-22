import { Card, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MusicNote } from '@mui/icons-material'

const apiURL = "https://grocery-list-0aqm.onrender.com";

function App() {
  const [areListsVisible, setAreListsVisible] = useState(true);
  const [lists, setLists] = useState([]);

  return (
    <>
      <Card className='container'>
        
      </Card>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import { MenuBar } from './components/MenuBar'
import { Footer } from './components/Footer'
import { SignedIn, SignedOut } from '@clerk/clerk-react'

const apiURL = "https://grocery-list-0aqm.onrender.com";

function App() {
  const [areListsVisible, setAreListsVisible] = useState(true);
  const [lists, setLists] = useState([]);

  return (
    <div className="h-full w-full flex flex-col">
      <MenuBar />
      <div className="h-full flex-grow">
        <div className="p-4">
          <SignedOut>
            <div className="flex flex-col items-center justify-center min-h-64">
              <h1 className="text-3xl font-bold mb-4">Welcome to Grocery List</h1>
              <p className="text-lg text-gray-600 mb-8">Please sign in to manage your grocery lists</p>
            </div>
          </SignedOut>
          <SignedIn>
            <div className="mt-4">
              <h1 className="text-2xl font-bold mb-4">Your Grocery Lists</h1>
              <p>Your grocery list content goes here...</p>
            </div>
          </SignedIn>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App

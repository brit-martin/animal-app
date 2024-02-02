import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import AddAnimal from './components/AddAnimal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddAnimal/>
    <Card/>
    </>
  )
}

export default App

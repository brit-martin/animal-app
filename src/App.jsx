import { useState } from 'react'
import Card from './components/Card'
import './App.css'
import AddAnimal from './components/AddAnimal'

function App() {
  const [animalObj, setAnimalObj] = useState([])
 

  return (
    <>
    <AddAnimal
      animalObj = {animalObj}
      setAnimalObj = {setAnimalObj}
    />
      <Card
      animalObj = {animalObj}
      setAnimalObj = {setAnimalObj}
    />
    </>
  )
}

export default App

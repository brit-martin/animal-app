import { useState } from 'react'
import Cards from './components/Cards'
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
      <Cards
      animalObj = {animalObj}
      setAnimalObj = {setAnimalObj}
    />
    </>
  )
}

export default App

import axios from 'axios'
import { useEffect, useState } from 'react'
import './cards.css'


export default function Cards ({setAnimalObj, animalObj}){
    const [filterInput, setFilterInput] = useState('')
    
    // console.log(animalObj)

    useEffect(() => {
        axios.get('/animals')
        .then((response) => {
            setAnimalObj(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    function filterAnimals(){
        axios.get(`/filter-animal?name=${filterInput}`)
        .then((response) => {
            let categoryName = response.data[0].name
            
            let animalList = response.data[0].species
            for (let i = 0; i < animalList.length; i++) { 
                animalList[i].category = {name: categoryName}
            }
            console.log(animalList) 

            setAnimalObj(animalList)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <>
        <div className='filter-animals'>
            <div>
                <label>Filter Animals:</label>
                <select 
                    name="category" 
                    id="add-animal"
                    value={filterInput} 
                    onChange={(e) => {setFilterInput(e.target.value)}}
                >   
                    <option selected>-- select an option --</option>
                    <option>Mammal</option>
                    <option>Reptile</option>
                    <option>Bird</option>
                    <option>Amphibian</option>
                    <option>Fish</option>
                    <option>Bug</option>
                    <option>Other</option>
                </select>
                <button onClick={filterAnimals}>Filter</button>

            </div>
        </div>
        <div className='animals'>
            
            {animalObj.map((element) => {
                {console.log(element)}
                return (
                    <div key={element.id} className='animal-card' style={{backgroundColor: element.category.color}}>
                        <h2 className='animal-name'>{element.animal}</h2>
                        <img className='animal-images' src={element.image}/>
                        <h3>Length: {element.length}</h3>
                        <h3>Color: {element.color}</h3>
                        <h3>Category: {element.category.name}</h3>
                        {console.log(element)}
                    </div>
                )
            })}
        </div>

        </>
    )
}
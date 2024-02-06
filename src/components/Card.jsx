import axios from 'axios'
import { useEffect, useState } from 'react'
import './card.css'


export default function Card ({setAnimalObj, animalObj}){
 

    useEffect(() => {
        axios.get('/animals')
        .then((response) => {
            setAnimalObj(response.data)

        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return(
        <>
        <div className='animals'>
            
            {animalObj.map((element) => {
                // {console.log(element)}
                return (
                    <div key={element.id} className='animal-card'>
                        <h2 className='animal-name'>{element.animal}</h2>
                        <img className='animal-images' src={element.image}/>
                        <h3>Length: {element.length}</h3>
                        <h3>Color: {element.color}</h3>
                        <h3>Category: {element.category.name}</h3>
                    </div>
                )
            })}
        </div>

        </>
    )
}
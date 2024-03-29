import axios from 'axios'
import {useState, useEffect} from 'react'
import './addanimal.css'

export default function AddAnimal({animalObj, setAnimalObj}){
    const [nameInput, setNameInput] = useState('')
    const [categoryInput, setCategoryInput] = useState('')
    const [colorInput, setColorInput] = useState('')
    const [lengthInput, setLengthInput] = useState('')
    const [imageInput, setImageInput] = useState('')
    

    function addAnimalButton(){
        if (categoryInput === '' || categoryInput === '-- select an option --') {
            alert('please select category')
            return
        }

        let myBody = {
            animal: nameInput,
            category: categoryInput,
            image: imageInput,
            color: colorInput,
            length: lengthInput
        }
        // console.log(myBody)

        axios.post('/add-animal', myBody)
        .then((response) => {
            // console.log(response.data)
           setAnimalObj(response.data)
           setNameInput('')
           setCategoryInput('')
           setColorInput('')
           setImageInput('')
           setLengthInput('')
        })
        .catch((error) => {
            console.log(error)
        })
    }
   

    return (
        <>
        <div>
            <h2>Add Animal</h2>
            <div className='create-animal'>
                <label htmlFor="name" className='animal-input'>Name:</label>
                <input 
                type='text' 
                name="name" 
                value={nameInput}
                id="add-animal"
                onChange={(e) => setNameInput(e.target.value)}/>

                <label htmlFor="category" className='animal-input'>Category:</label>
                <select 
                    name="category" 
                    id="add-animal"
                    value={categoryInput} 
                    onChange={(e) => {setCategoryInput(e.target.value)}}
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

                <label htmlFor="length" className='animal-input'>Length:</label>
                <input 
                    type="text" 
                    name="length" 
                    value={lengthInput}
                    id='add-animal'
                    onChange={(e) => setLengthInput(e.target.value)}/>
                    

                <label htmlFor='image' className='animal-input'>Image:</label>    
                <input
                    type='text'
                    name='image'
                    value={imageInput}
                    placeholder='http://www.example.com'
                    id='add-animal'
                    onChange={(e) => setImageInput(e.target.value)}
                />

                <label htmlFor="color" className='animal-input'>Color:</label>
                <input 
                    type="text" 
                    name="color" 
                    value={colorInput}
                    id='add-animal'
                    onChange={(e) => setColorInput(e.target.value)}/>
                <button onClick={addAnimalButton} className='animal-input savebtn'>Save</button>
            </div>
        </div>
        
        </>
    )
}
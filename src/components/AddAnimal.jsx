import axios from 'axios'
import {useState, useEffect} from 'react'

export default function AddAnimal(){

    const [nameInput, setNameInput] = useState('')
    const [categoryInput, setCategoryInput] = useState('')
    const [colorInput, setColorInput] = useState('')
    const [lengthInput, setLengthInput] = useState('')

    function signUpButton(){
        let myBody = {
            animal: nameInput,
            category: categoryInput,
            color: colorInput,
            length: lengthInput
        }
        axios.post

    }


    return (
        <>
        <div>
            <h3>Add Animal</h3>
            <label htmlFor="name">Name:</label>
            <input type='text' name="name" id="add-animal"/>

            <label htmlFor="category">Category:</label>
            <select name="category" id="add-animal">
                <option value="mammal">Mammal</option>
                <option value="reptile">Reptile</option>
                <option value="bird">Bird</option>
                <option value="amphibian">Amphibian</option>
                <option value="fish">Fish</option>
                <option value="bug">Bug</option>
                <option value="other">Other</option>
            </select>

            <label htmlFor="length">Length:</label>
            <input type="text" name="length" id='add-animal'/>

            <label htmlFor="color">Color:</label>
            <input type="text" name="color" id='add-animal'/>
            <button onClick={addAnimal}>Save</button>
        </div>
        </>
    )
}
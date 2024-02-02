import express from 'express'
import ViteExpress from 'vite-express'
import { Category, Species } from './models/model.js'

const app = express()
app.use(express.json())

app.get('/animals', async (req, res) => {
    let animalSpeciesArr = await Species.findAll({
        include: [{
            model: Category,
        }]
    })
        res.status(200).send(animalSpeciesArr)
        // console.log(animalSpeciesArr)
})

app.post('/add-animal', async (req, res) => {
    const { animal, length, color, category} = req.body
    if (!animal || !length || !color ){
        res.send('All fields are required to sign up')
        return
    }
    let gettingCategory = await Category.findOne({
        where: {name: category}
    })
    console.log(gettingCategory)
    let newSpecies = await Species.create({
        animal: animal,
        length: length,
        color: color,
        categoryId: gettingCategory.id
    })
    console.log(newSpecies)
        res.status(200).send(newSpecies)
    })



ViteExpress.listen(app, 8090, () => {
    console.log('Server up and running on port 8090')
})
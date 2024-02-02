import { sequelize, Category, Species } from "../models/model.js";

const categories = [
    {
        name: 'Mammal',
        color: 'burgundy'
    },
    {
        name: 'Reptile',
        color: 'light green'
    },
    {
        name: 'Bird',
        color: 'yellow'
    },
    {
        name: 'Amphibian',
        color: 'red'
    },
    {
        name: 'Fish',
        color: 'Blue'
    },
    {
        name: 'Bug',
        color: 'purple'
    },
    {
        name: 'Other',
        color: 'orange'
    },
]

const species = [
    {
        animal: 'Frog',
        length: '3 in',
        color: 'green'
    },
    {
        animal: 'Elephant',
        length: '21 ft',
        color: 'gray'
    },
    {
        animal: 'Flamingo',
        length: '59 in',
        color: 'Pink'
    },
    {
        animal: 'Ladybug',
        length: '8 mm',
        color: 'red'
    },
    {
        animal: 'Alligator',
        length: '15 ft',
        color: 'Olive'
    }, 
    {
        animal: 'Octopus',
        length: '3 ft',
        color: 'redish brown'
    },
    {
        animal: 'Black widow',
        length: '10 mm',
        color: 'black'
    },
]
await sequelize.sync({force: true})

await Species.bulkCreate(species)
await Category.bulkCreate(categories)


await sequelize.close()
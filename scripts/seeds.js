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

const oneSpecies = await Species.bulkCreate(species)
const oneCategory = await Category.bulkCreate(categories)


const frogSpecies = await Species.findOne({
    where: {animal: 'Frog'}
})
const frogCategory = await Category.findOne({
    where: {name: 'Amphibian'}
})
await frogSpecies.setCategory(frogCategory)


const elephantSpecies = await Species.findOne({
    where: {animal: 'Elephant'}
})
const elephantCategory = await Category.findOne({
    where: {name: 'Mammal'}
})
await elephantSpecies.setCategory(elephantCategory)



const flamingoSpecies = await Species.findOne({
    where: {animal: 'Flamingo'}
})
const flamingoCategory = await Category.findOne({
    where: {name: 'Bird'}
})
await flamingoSpecies.setCategory(flamingoCategory)


const ladybugSpecies = await Species.findOne({
    where: {animal: 'Ladybug'}
})
const ladybugCategory = await Category.findOne({
    where: {name: 'Bug'}
})
await ladybugSpecies.setCategory(ladybugCategory)


const alligatorSpecies = await Species.findOne({
    where: {animal: 'Alligator'}
})
const alligatorCategory = await Category.findOne({
    where: {name: 'Reptile'}
})
await alligatorSpecies.setCategory(alligatorCategory)


const blackwidowSpecies = await Species.findOne({
    where: {animal: 'Black widow'}
})
const blackwidowCategory = await Category.findOne({
    where: {name: 'Other'}
})
await blackwidowSpecies.setCategory(blackwidowCategory)


const octopusSpecies = await Species.findOne({
    where: {animal: 'Octopus'}
})
const octopusCategory = await Category.findOne({
    where: {name: 'Fish'}
})
await octopusSpecies.setCategory(octopusCategory)

await sequelize.close()
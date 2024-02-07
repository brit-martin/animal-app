import { sequelize, Category, Species } from "../models/model.js";

const categories = [
    {
        name: 'Mammal',
        color: '#F89F5B'
    },
    {
        name: 'Reptile',
        color: '#90EE90'
    },
    {
        name: 'Bird',
        color: '#E1AD01'
    },
    {
        name: 'Amphibian',
        color: '#cd5c5c'
    },
    {
        name: 'Fish',
        color: '#20B2AA'
    },
    {
        name: 'Bug',
        color: '#653780'
    },
    {
        name: 'Other',
        color: '#E53F71'
    },
]

const species = [
    {
        animal: 'Frog',
        length: '3 in',
        color: 'green',
        image: 'https://www.canr.msu.edu/contentAsset/image/44bc1519-3b22-42b7-9d10-46e3f9f20309/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80',
    },
    {
        animal: 'Elephant',
        length: '21 ft',
        color: 'gray',
        image: 'https://www.treehugger.com/thmb/tKe5Rn214X_AXAE-kRUbiu7pOuo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/front-view-of-a-bull-elephant-in-the-grasslands-of-amboseli-national-park--1219745751-08f3add138514ad091e82e29a11546cc.jpg',
    },
    {
        animal: 'Flamingo',
        length: '59 in',
        color: 'Pink',
        image: 'https://shop.wwf.ca/cdn/shop/files/Flamingospeciesphoto.jpg?v=1695655278&width=2048'
    },
    {
        animal: 'Ladybug',
        length: '8 mm',
        color: 'red',
        image: 'https://media.istockphoto.com/id/893470324/photo/ladybug-in-the-green-grass.jpg?s=612x612&w=0&k=20&c=KzMSMuQNJwcpjhtCeEwDiHoPGA_56lTcAeNnaw54D4M=',
    },
    {
        animal: 'Alligator',
        length: '15 ft',
        color: 'Olive',
        image: 'https://cdn.mos.cms.futurecdn.net/AWMXeGZ4rCTCGMPXNPhS2i-1200-80.jpg',
    }, 
    {
        animal: 'Octopus',
        length: '3 ft',
        color: 'redish brown',
        image: 'https://media.istockphoto.com/id/1136409408/photo/close-up-view-of-a-common-octopus.jpg?s=612x612&w=0&k=20&c=PHlT9mhvOOhDf8mMmgOO-FkAf3EbpjpQtZiVFllH5P0=',
    },
    {
        animal: 'Black widow',
        length: '10 mm',
        color: 'black',
        image: 'https://www.aces.edu/wp-content/uploads/2019/03/Black-Widow-Spider.jpg',
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
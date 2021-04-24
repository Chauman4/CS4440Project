import Collisions from '../models/Schema.js'
import asyncHandler from 'express-async-handler'

//getCollisions function to get all collisons
export const getCollisions = asyncHandler(async(req, res) => {
    const collisions = await Collisions.find({victimSex:'M'})
    res.json(collisions)
})

//getUserById function to retrieve user by id
export const getCollisionById  = asyncHandler(async(req, res) => {
    const collison = await Collisions.findById(req.params.id)

    //if user id match param id send user else throw error
    if(collison) {
        res.json(collison)
        console.log(collison)
    } else {
        res.status(404).json({message: "Collision not found"})
        res.status(404)
        throw new Error('Collision not found')
    }
})

//getUserById function to retrieve user by gender
export const getCollisionByGender  = asyncHandler(async(req, res) => {
    console.log(req.body)
    console.log(req.params)
    const collisions = await Collisions.find({victimSex: req.params.victimSex}, (req, res) => console.log(req, res))
    console.log(collisions)
    res.json(collisions)
})

//getUserById function to retrieve user by gender, sex, and age
export const getCollisionByRaceAgeGender  = asyncHandler(async(req, res) => {
    console.log(req.body)
    console.log(req.params)
    const collisions = await Collisions.find({
        victimSex: req.params.victimSex, 
        victimAge: { $lte: req.params.victimMaxAge, $gte: req.params.victimMinAge}, 
        victimDescent: req.params.victimDescent
    }, (req, res) => console.log(req, res))
    console.log(collisions)
    res.json(collisions)
})

//get collisions by gender 
//param: gender ('M' or 'F')
// export async function getCollisionsByGender(gender) {
//     const getCollision = await Collisions.find({"victimSex": gender})
//     return getCollision
// }

    // if (collision) {
    //     res.json(collision)
    // } else {
    //     res.status(404).json({message: "Collision by gender failed"})
    //     res.status(404)
    //     throw new Error('Collision by gender failed')
    // }
export async function testing() {
    const test = await Collisions.find({victimSex: "M"});
    return test
}

// exports.findByGender = function(req, res) {
//     Collisions.findOne({victimSex: "M"}, (err, collisions) => {
//         res.status(200).json(collisions)
//     })
//}
import Collisions from '../models/Schema.js'
import asyncHandler from 'express-async-handler'

//getCollisions function to get all collisons
export const getCollisions = asyncHandler(async(req, res) => {
    const collisions = await Collisions.find({})
    res.json(collisions)
})

//getUserById function to retrieve user by id
export const getCollisionById  = asyncHandler(async(req, res) => {
    const collison = await Collisions.findById(req.params.id)

    //if user id match param id send user else throw error
    if(collison){
        res.json(collison)
    }else{
        res.status(404).json({message: "Collision not found"})
        res.status(404)
        throw new Error('Collision not found')
    }
})
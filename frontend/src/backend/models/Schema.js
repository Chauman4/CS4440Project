import mongoose from 'mongoose'

const collisionsSchema = mongoose.Schema({
    drNumber: {
        type: String,
        unique:true
    },
    dateOccured:{
        type: Date
    },
    timeOccured: {
        type: Number
    },
    areaName: {
        type: String
    },
    victimAge: {
        type: Number
    },
    victimSex: {
        type: String
    },
    victimDescent: {
        type: String
    },
    address: {
        type: String
    },
    crossStreet: {
        type: String
    },
    location: {
        type: Object
    },
    zipCode: {
        type: Number
    }
})

const Collisions = mongoose.model('Collisions', collisionsSchema)

export default Collisions
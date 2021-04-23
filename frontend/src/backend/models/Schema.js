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
    zipCode: {
        type: Number
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    }
})

const Collisions = mongoose.model('Collisions', collisionsSchema)

export default Collisions
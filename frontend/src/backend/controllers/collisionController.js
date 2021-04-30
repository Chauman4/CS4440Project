import Collisions from '../models/Schema.js'
import asyncHandler from 'express-async-handler'

//getCollisions function to get all collisons
export const getCollisions = asyncHandler(async(req, res) => {
    const collisions = await Collisions.find()
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

//getUserById function to retrieve collision by gender, sex, and age
export const getCollisionByRaceAgeGender  = asyncHandler(async(req, res) => {
    console.log(req.body)
    console.log(req.params)
    const pipeline = [
        {
            '$match': {
                'victimSex': req.params.victimSex, 
                'victimAge': {
                    '$lte': parseInt(req.params.victimMaxAge), 
                    '$gte': parseInt(req.params.victimMinAge)
                }, 
                'victimDescent': req.params.victimDescent
            }
        }, {
            '$group': {
                '_id': '$zipCode', 
                'count': {
                    '$sum': 1
                }
            }
        }
    ]
    console.log('before agg')
    const collisions = await Collisions.aggregate(pipeline)
    res.json(collisions)
})

//getCollisionByHoliday function to retrieve user by gender, sex, and age
export const getCollisionByHoliday  = asyncHandler(async(req, res) => {
    console.log(req.body)
    console.log(req.params)
    const pipeline = [
        {
          '$project': {
            'dateOccurred': 1, 
            'date': {
              '$dayOfYear': '$dateOccurred'
            }, 
            'year': {
              '$year': '$dateOccurred'
            }
          }
        }, {
          '$match': {
            'date': {
              '$in': [
                1, 15, 46, 76, 145, 185, 244, 281, 315, 326, 359
              ]
            }, 
            'year': parseInt(req.params.year)
          }
        }, {
          '$group': {
            '_id': '$date', 
            'count': {
              '$sum': 1
            }
          }
        }
      ]
    console.log('before agg')
    const collisions = await Collisions.aggregate(pipeline)
    res.json(collisions)
})

        
    // console.log(typeof(collisions))
    //res = collisions;
    // res = typeof(collisions)
    //res.json(collisions)
    /*
    const collisions = await Collisions.find({
        victimSex: req.params.victimSex, 
        victimAge: { $lte: parseInt(req.params.victimMaxAge), $gte: parseInt(req.params.victimMinAge)}, 
        victimDescent: req.params.victimDescent
    }, (req, res) => console.log(req, res))
    console.log(collisions)
    res.json(collisions)
    */


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

export const getCollisionGenderByMonth  = asyncHandler(async(req, res) => {
    console.log(req.body)
    console.log(req.params)
    const pipeline = [
        {
            '$match': {
                'victimSex': req.params.victimSex
            }
        }, {
            '$group': {
                '_id': {
                    '$month': '$dateOccurred'
                }, 
                'count': {
                    '$sum': 1
                }
            }
        }
    ]
    console.log('before agg')
    const collisions = await Collisions.aggregate(pipeline)
    res.json(collisions)
})

export const getAgeAndRank = asyncHandler(async(req, res) => {
    const pipeline = [
      {
        '$project': {
          'dateOccurred': 1, 
          'victimAge': 1,
          'year': {
            '$year': '$dateOccurred'
          }
        }
      },
       {
        '$match': { 
          'year': parseInt(req.params.year)
        }
      },{
            '$group': {
                '_id': '$victimAge', 
                'count': {
                    '$sum': 1
                }
            }
        },{
            '$sort' : {
                'count': parseInt(req.params.rank)
            }
        }
    ]
    const collisions = await Collisions.aggregate(pipeline)
    res.json(collisions)
})

export const getGenderRatio = asyncHandler(async(req, res) => {
    const pipeline = [
        {
          '$group': {
            '_id': '$victimSex', 
            'count': {
              '$sum': 1
            }
          }
        }
      ]
    const collisions = await Collisions.aggregate(pipeline)
    res.json(collisions)
})

export const getRaceRatio = asyncHandler(async(req, res) => {
    const pipeline = [
        {
          '$group': {
            '_id': '$victimDescent', 
            'count': {
              '$sum': 1
            }
          }
        }
      ]
    const collisions = await Collisions.aggregate(pipeline)
    res.json(collisions)
})


export async function testing() {
    const test = await Collisions.find({victimSex: "M"});
    return test
}

// exports.findByGender = function(req, res) {
//     Collisions.findOne({victimSex: "M"}, (err, collisions) => {
//         res.status(200).json(collisions)
//     })
//}
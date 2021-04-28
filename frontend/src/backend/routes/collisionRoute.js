import { 
    getCollisions, 
    getCollisionById, 
    getCollisionByGender, 
    getCollisionByRaceAgeGender,
    getCollisionGenderByMonth,
    getCollisionByHoliday,
    getAgeAndRank
} from "../controllers/collisionController.js";
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
//router.route('/').get(getCollisionById)

// express router method to create route for getting users by id
router.route('/:id').get(getCollisionById)

// express router method to create route for getting users by id
router.route('/getGender/:victimSex').get(getCollisionByGender)

// express router method to create route for getting users by id
router.route('/getRaceAgeGender/:victimSex/:victimMaxAge/:victimMinAge/:victimDescent').get(getCollisionByRaceAgeGender)

router.route('/getGenderByMonth/:victimSex').get(getCollisionGenderByMonth)
// express router method to create route for getting users by id
router.route('/getHoliday/:year').get(getCollisionByHoliday)

router.route('/getAgeRank/:rank').get(getAgeAndRank)

export default router
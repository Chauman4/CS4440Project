import { getCollisions, getCollisionById, getCollisionByGender } from "../controllers/collisionController.js";
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getCollisionById)

// express router method to create route for getting users by id
// router.route('/:id').get(getCollisionById)

// express router method to create route for getting users by id
router.route('/getGender/:victimSex').get(getCollisionByGender)

export default router
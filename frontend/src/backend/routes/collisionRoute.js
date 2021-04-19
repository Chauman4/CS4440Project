import { getCollisions, getCollisionById } from "../controllers/collisionController.js";
import express from 'express'
const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getCollisions)

// express router method to create route for getting users by id
router.route('/:id').get(getCollisionById)

export default router
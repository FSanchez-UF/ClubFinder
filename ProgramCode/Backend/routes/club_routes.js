// Adapted from https://medium.com/how-to-react/setup-mern-mongodb-express-js-react-js-and-node-js-environment-and-create-your-first-mern-7774df0fff19

import { getClubs, getClubById } from "../controllers/controller.js";
import express from 'express'
const router = express.Router()


// express router method to create route for getting all clubs
router.route('/').get(getClubs)

// express router method to create route for getting users by id
router.route('/:id').get(getClubById)

export default router
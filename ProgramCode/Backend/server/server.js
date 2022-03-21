// Adapted from https://medium.com/how-to-react/setup-mern-mongodb-express-js-react-js-and-node-js-environment-and-create-your-first-mern-7774df0fff19

import connectDB from '../config/db.js'
import club_routes from '../routes/club_routes.js'
import express from 'express'
import dotenv  from 'dotenv'

//connect database
connectDB()

//dotenv config
dotenv.config({path: '../../../.env'})
console.log(process.env.PORT)
const app = express()

//
app.use('/Club_Data', club_routes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log(`App is running in ${process.env.NODE} mode on port ${PORT}`))

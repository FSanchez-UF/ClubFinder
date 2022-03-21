// Adapted from https://medium.com/how-to-react/setup-mern-mongodb-express-js-react-js-and-node-js-environment-and-create-your-first-mern-7774df0fff19

import Club from '../models/club_model.js'
import asyncHandler from 'express-async-handler'

//getClubs function to get all clubs
export const getClubs = asyncHandler(async(req, res) => {
    const clubs = await Club.find({})
    res.json(clubs)
})

//getClubById function 
export const getClubById  = asyncHandler(async(req, res) => {
    const club = await Club.findById(req.params.id)

    //if user id match param id send user else throw error
    if(club){
        res.json(club)
    }else{
        res.status(404).json({message: "Club not found"})
        res.status(404)
        throw new Error('Club not found')
    }
})




// Adapted from https://medium.com/how-to-react/setup-mern-mongodb-express-js-react-js-and-node-js-environment-and-create-your-first-mern-7774df0fff19

import mongoose from 'mongoose'

const ClubSchema = mongoose.Schema({
    name: {
        type: String,
    },
    purpose:{
        type: String,
    },
    category: {
        type: String,
    },
    website: {
        type: String,
    },
}, {
    timestamps: true
})

const Club = mongoose.model('Club_Data', ClubSchema)

export default Club
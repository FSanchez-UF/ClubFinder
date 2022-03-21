
// Adapted from https://medium.com/how-to-react/setup-mern-mongodb-express-js-react-js-and-node-js-environment-and-create-your-first-mern-7774df0fff19

import mongoose from 'mongoose'
import dotenv  from 'dotenv'

dotenv.config({path: '../../../.env'})

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MongoURI, { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB
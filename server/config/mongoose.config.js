import { connect } from "mongoose";
import dotenv from "dotenv";

// call in environment variables
dotenv.config()

// get the MongoDB instance URL from .env
const MONGODB_URI = process.env.MONGODB_URI


// async function that will establish a connection to our
// MongoDB deployment in MongoDB Atlas
async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: "reactiveCoffeeCoDB" // <-- change to correct DB name
        })

        console.log("You have successfully pinged and connected to your MongoDB deployment!")
    } catch(error) {
        console.log(error);
        throw error
    }
}

export default dbConnect
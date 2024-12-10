import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoUri = process.env.MONGO_URI || "";

async function databaseConnection() {
    
    try {
        await mongoose.connect(mongoUri)
        console.log("Database connected");

    } catch (error) {
        console.log(error);
    }

}

export default databaseConnection;
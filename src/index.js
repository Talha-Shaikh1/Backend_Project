// require("dotenv").config({path: "./env"});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port: ${process.env.PORT || 4000}`);
    })
})
.catch((err) => {
    console.log("Error connecting to MongoDB:", err);
})


/*

import express from "express";
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, )
        app.on("error", (err) => {
            console.error("MongoDB connection error:", err);
            throw err
        });
        
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error
    }
})()

*/

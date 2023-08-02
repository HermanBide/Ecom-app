import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRouter from './routes/authRoute.js'


dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//ROUTES
app.use('/api/v1/auth', authRouter)

const port = process.env.PORT || 3002

const dbConnect = async() => { 
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log("Connection to MongoDB was successful!");
          app.listen(port, () => console.log(`Connected to port ${port}`));
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

dbConnect();
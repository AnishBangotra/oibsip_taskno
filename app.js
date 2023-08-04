import express from 'express';
import userRouter from "./routes/user.js";
import pizzaRouter from "./routes/pizza.js";
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from "cors";
import { errorMiddleware } from './middlewares/error.js';

export const app = express();

config({
    path: "./data/config.env",
})

//using middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    method: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
}));
app.use(errorMiddleware);

//routes
app.use("/users",userRouter);
app.use("/pizza",pizzaRouter);

app.get('/', (req, res) => {
    res.send('WORKING');
})


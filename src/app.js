import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

export const app = express()

app.use(cors({
    origin: ['*'], credentials: true
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.static('public'))
app.use(cookieParser())


// routes
// import routes
import { userRouter } from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter)
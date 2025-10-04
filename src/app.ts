import express, { type Request, type Response } from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import { router } from "./app/routes";



const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/", router)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello from backend of Portfolio website!"
    })
});


export default app;
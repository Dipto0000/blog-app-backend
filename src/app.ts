import express, { type Request, type Response } from "express";
import cors from "cors";



const app = express();

app.use(express.json());
app.use(cors());


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Hello from backend of Portfolio website!"
    })
});


export default app;
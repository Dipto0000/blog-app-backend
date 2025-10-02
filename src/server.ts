import { Server } from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";

dotenv.config();

let server: Server;

const startServer = async() => {
    try {
        await mongoose.connect(process.env.DB_URL as string);

        server = app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.log(error);
        
    }
}

(async () => {
    await startServer()
    await seedSuperAdmin()
})()

startServer();
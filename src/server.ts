import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { seedSuperAdmin } from "./app/utils/seedSuperAdmin";
import { envVars } from "./app/config/env";


let server: Server;

const startServer = async() => {
    try {
        await mongoose.connect(envVars.DB_URL);

        server = app.listen(envVars.PORT, () => {
            console.log(`Server running on port ${envVars.PORT}`);
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
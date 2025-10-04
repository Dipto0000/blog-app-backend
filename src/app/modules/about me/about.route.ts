import { Router } from "express";
import { AboutController } from "./about.controller";


const router = Router();

router.post("/create", AboutController.createAboutInfo);



export const aboutRoutes = router;
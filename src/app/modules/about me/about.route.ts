import { Router } from "express";
import { AboutController } from "./about.controller";
import { checkAuth } from "../../middleswares/checkAuth";
import { Role } from "../user/user.interface";


const router = Router();

router.post("/create", checkAuth(Role.SuperAdmin), AboutController.createAboutInfo);
router.get("/", AboutController.getAboutInfo);



export const aboutRoutes = router;
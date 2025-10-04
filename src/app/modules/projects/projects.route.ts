import { Router } from "express";
import { ProjectController } from "./projects.controller";
import { checkAuth } from "../../middleswares/checkAuth";
import { Role } from "../user/user.interface";


const router = Router();

router.post("/create", checkAuth(Role.SuperAdmin), ProjectController.createProjectInfo);
router.get("/", ProjectController.getProjectInfo);


export const projectRoutes = router;
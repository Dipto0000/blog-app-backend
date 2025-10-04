import { Router } from "express";
import { ProjectController } from "./projects.controller";


const router = Router();

router.post("create", ProjectController.createProjectInfo);
router.get("/", ProjectController.getProjectInfo);



export const projectRoutes = router;
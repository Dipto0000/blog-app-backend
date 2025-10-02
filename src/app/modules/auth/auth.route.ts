import { Router } from "express";
import { authController } from "./auth.controller";


const router = Router();

router.post("/login", authController.credentialsLogin);
// router.post("/logOut",)
// router.post("refresh-token",)






export const authRoutes = router;
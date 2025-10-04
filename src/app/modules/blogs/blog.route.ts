import express from "express";
import { BlogController } from "./blog.controller";
import { checkAuth } from "../../middleswares/checkAuth";
import { Role } from "../user/user.interface";

const router = express.Router();

router.post("/create", checkAuth(Role.SuperAdmin), BlogController.createBlogPost);
router.get("/", BlogController.getBlogPosts);
router.get("/:id", BlogController.getSingleBlogPost);
router.delete("/:id", checkAuth(Role.SuperAdmin), BlogController.deleteBlogPost);
router.patch("/:id", checkAuth(Role.SuperAdmin), BlogController.updateBlogPost);

export const blogRoutes = router;
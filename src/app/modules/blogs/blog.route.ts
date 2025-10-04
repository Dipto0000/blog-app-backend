import express from "express";
import { BlogController } from "./blog.controller";
import { checkAuth } from "../../middleswares/checkAuth";

const router = express.Router();

router.post("/create", checkAuth({ role: "Super Admin" }), BlogController.createBlogPost);
router.get("/", BlogController.getBlogPosts);
router.get("/:id", BlogController.getSingleBlogPost);
router.delete("/:id", checkAuth({ role: "Super Admin" }), BlogController.deleteBlogPost);
router.patch("/:id", checkAuth({ role: "Super Admin" }), BlogController.updateBlogPost);

export const blogRoutes = router;
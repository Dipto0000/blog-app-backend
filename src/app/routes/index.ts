import { Router } from "express";
import { blogRoutes } from "../modules/blogs/blog.route";

export const router = Router();

const moduleRoutes = [
    {
        path: "/blogs",
        route: blogRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));
import { Router } from "express";
import { blogRoutes } from "../modules/blogs/blog.route";
import { authRoutes } from "../modules/auth/auth.route";

export const router = Router();

const moduleRoutes = [
    {
        path: "/blogs",
        route: blogRoutes
    },
    {
        path: "/auth",
        route: authRoutes
    },
    
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));
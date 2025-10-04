import { Router } from "express";
import { blogRoutes } from "../modules/blogs/blog.route";
import { authRoutes } from "../modules/auth/auth.route";
import { aboutRoutes } from "../modules/about me/about.route";
import { projectRoutes } from "../modules/projects/projects.route";

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
    {
        path: "/about-me",
        route: aboutRoutes
    },

    {
        path: "/projects",
        route: projectRoutes
    }
    
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));
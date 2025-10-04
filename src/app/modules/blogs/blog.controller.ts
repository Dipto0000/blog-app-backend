import { Request, Response } from "express";
import { BlogService } from "./blog.services";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";


const createBlogPost = catchAsync(async (req: Request, res: Response) => {

    const blogPost = await BlogService.createBlogPost(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog post created successfully",
        data: blogPost
    })
})


const getBlogPosts = catchAsync(async (req: Request, res: Response) => {

    const blogPosts = await BlogService.getBlogPosts();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog posts fetched successfully",
        data: blogPosts
    })

})

const getSingleBlogPost = catchAsync(async (req: Request, res: Response) => {

    const blogPost = await BlogService.getSingleBlogPost(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog post fetched successfully",
        data: blogPost
    })

})

const deleteBlogPost = catchAsync(async (req: Request, res: Response) => {

    const blogPost = await BlogService.deleteBlogPost(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog post deleted successfully",
        data: null
    })

})

const updateBlogPost = catchAsync(async (req: Request, res: Response) => { 

    const updateBlogPost = await BlogService.updateBlogPost(req.params.id, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Blog post updated successfully",
        data: updateBlogPost
    })

})

export const BlogController = {
    createBlogPost,
    getBlogPosts,
    getSingleBlogPost,
    deleteBlogPost,
    updateBlogPost
}
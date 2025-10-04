import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";


const createBlogPost = (payload: IBlog) => {

    const { title, description, image, author, category } = payload;

    const blogPost = Blog.create({ title, description, image, author, category });

    return blogPost;
    
}

const getBlogPosts = () => {

    const blogPosts = Blog.find();

    if(!blogPosts) {
        throw new Error("Blog posts not found");
    }

    return blogPosts

}

const getSingleBlogPost = (payload: string) => {

    const blogPost = Blog.findById(payload);

    if(!blogPost) {
        throw new Error("Blog post not found");
    }

    return blogPost

}

const deleteBlogPost = (payload: string) => {

    const blogPost = Blog.findByIdAndDelete(payload);

    if(!blogPost) {
        throw new Error("Blog post not found");
    }

    return blogPost
}

const updateBlogPost = (id: string, payload: Partial<IBlog>) => { 

    const blogPost = Blog.findByIdAndUpdate(id, payload, { new: true });

    if(!blogPost) {
        throw new Error("Blog post not found");
    }

    return blogPost;
}


export const BlogService = {
    createBlogPost,
    getBlogPosts,
    getSingleBlogPost,
    deleteBlogPost,
    updateBlogPost
}
import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";

const blogSchema = new Schema<IBlog>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: { type: String },
    author: { type: String },
    category: { type: String },
    
}, {
    timestamps: true,
    versionKey: false
});

export const Booking = model<IBlog>("Blog", blogSchema);
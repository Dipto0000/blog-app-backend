import mongoose, { Schema } from "mongoose";
import { IProject } from "./projects.interface";

const projectSchema = new Schema<IProject>({
    
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: { type: String },
    link: { type: String },
}, {
    timestamps: true,
    versionKey: false
})

export const Projects = mongoose.model<IProject>("Projects", projectSchema);

import mongoose, { Schema } from "mongoose";
import { IAbout } from "./about.interface";

const aboutSchema = new Schema<IAbout>({
    description: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export const About = mongoose.model<IAbout>("About", aboutSchema);
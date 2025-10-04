import { IProject } from "./projects.interface";
import { Projects } from "./projects.model";


const createProjectInfo = (payload: Partial<IProject>) => {

    const projectInfo = Projects.create(payload);
    

    return projectInfo
}

const getProjectInfo = () => {

    const projectInfo = Projects.find({});

    if(!projectInfo) {
        throw new Error("Project info not found");
    }

    return projectInfo
}

export const ProjectServices = {
    createProjectInfo,
    getProjectInfo
}
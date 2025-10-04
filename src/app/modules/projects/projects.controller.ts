import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectServices } from "./projects.services";


const createProjectInfo = catchAsync(async (req: Request, res: Response) => {

    const createProjectInfo = await ProjectServices.createProjectInfo(req.body);
    
sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Project info created successfully",
    data: createProjectInfo
})

})

const getProjectInfo = catchAsync(async (req: Request, res: Response) => {

    const projectInfo = await ProjectServices.getProjectInfo();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Project info fetched successfully",
        data: projectInfo
    })
})


export const ProjectController = {
    createProjectInfo,
    getProjectInfo
}
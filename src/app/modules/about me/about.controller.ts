import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AboutService } from "./about.services";

const createAboutInfo = catchAsync(async (req: Request, res: Response) => {

    const aboutInfo = await AboutService.createAboutInfo(req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "About info created successfully",
        data: aboutInfo
    })
})

const getAboutInfo = catchAsync(async (req: Request, res: Response) => {

    const aboutInfo = await AboutService.getAboutInfo();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "About info fetched successfully",
        data: aboutInfo
    })
})

export const AboutController = {
    createAboutInfo,
    getAboutInfo
}
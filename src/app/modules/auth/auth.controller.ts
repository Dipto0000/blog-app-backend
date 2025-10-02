import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { authService } from "./auth.services";
import { sendResponse } from "../../utils/sendResponse";
import { setAuthCookie } from "../../utils/setCookie";


const credentialsLogin = catchAsync(async (req: Request, res: Response) => {
    
    const loginInfo = await authService.credentialsLogin(req.body) 

    setAuthCookie(res, loginInfo);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Login successful",
        data: loginInfo
    })
})



export const authController = {
    credentialsLogin
}
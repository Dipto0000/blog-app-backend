import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { AuthService } from "./auth.services";
import { sendResponse } from "../../utils/sendResponse";
import { setAuthCookie } from "../../utils/setCookie";


const credentialsLogin = catchAsync(async (req: Request, res: Response) => {
    
    const loginInfo = await AuthService.credentialsLogin(req.body) 

    setAuthCookie(res, loginInfo);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Login successful",
        data: loginInfo
    })
})

const getNewAccessToken = catchAsync(async (req: Request, res: Response) => {

    const refreshToken = req.cookies.refreshToken as string;

    if(!refreshToken) {
        throw new Error("Refresh token not found in cookies")
    }

    const tokenInfo = await AuthService.getNewAccessToken(refreshToken as string);

    setAuthCookie(res, tokenInfo)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Access token refreshed successfully",
        data: tokenInfo
    })
})

const logout = catchAsync(async (req: Request, res: Response) => {

    res.clearCookie("accessToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })
    
    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    })

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Logout successful",
        data: null
    })
})


export const AuthController = {
    credentialsLogin,
    getNewAccessToken,
    logout
}
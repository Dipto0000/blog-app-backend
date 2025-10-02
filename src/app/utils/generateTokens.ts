import { JwtPayload } from "jsonwebtoken";
import {  IUser } from "../modules/user/user.interface";
import { User } from "../modules/user/user.model";
import { generateToken, verifyToken } from "./jwt";

export const createUserTokens = (user: Partial<IUser>) => {
    const jwtPayload = {
        email: user.email,
        role: "Super Admin"
    }
    const accessToken = generateToken(jwtPayload, process.env.JWT_ACCESS_SECRET as string, process.env.JWT_ACCESS_EXPIRES as string)

    const refreshToken = generateToken(jwtPayload, process.env.JWT_REFRESH_SECRET as string, process.env.JWT_REFRESH_EXPIRES as string)


    return {
        accessToken,
        refreshToken
    }
}

export const createNewAccessTokenWithRefreshToken = async (refreshToken: string) => {

    const verifiedRefreshToken = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET as string) as JwtPayload


    const isUserExist = await User.findOne({ email: verifiedRefreshToken.email })

    const jwtPayload = {
        email: isUserExist?.email,
        role: "Super Admin"
    }
    const accessToken = generateToken(jwtPayload, process.env.JWT_ACCESS_SECRET as string, process.env.JWT_ACCESS_EXPIRES as string)

    return accessToken;
}
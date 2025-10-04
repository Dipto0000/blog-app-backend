import { NextFunction, Request, Response } from "express";
import { IUser } from "../modules/user/user.interface";
import { verifyToken } from "../utils/jwt";
import { envVars } from "../config/env";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/user/user.model";


export const checkAuth = (...authRoles: string[]) => async(req: Request, res: Response, next: NextFunction) => {

    try {
        
        const accessToken = req.headers.authorization || req.cookies.accessToken;

        if(!accessToken) {
            return res.status(401).json({ message: "Unauthorized Access" });
        }

        const verifiedToken = verifyToken(accessToken, envVars.JWT_ACCESS_SECRET) as JwtPayload;

        const isUserExist = await User.findOne({ email: verifiedToken.email });

        if(!isUserExist) {
            return res.status(401).json({ message: "Unauthorized User" });
        }
        
        if(!authRoles.includes(isUserExist.role)){
            throw new Error("You are not authorized to access this route");
        }

        req.user = verifiedToken;

        next();

    } catch (error) {
        console.log(error);
        next(error);
    }

}
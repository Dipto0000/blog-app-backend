import { NextFunction, Request, Response } from "express";
import { IUser } from "../modules/user/user.interface";
import { verifyToken } from "../utils/jwt";
import { envVars } from "../config/env";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/user/user.model";


export const checkAuth = (role: Partial<IUser>) => (req: Request, res: Response, next: NextFunction) => {

    try {
        
        const accessToken = req.headers.authorization || req.cookies.accessToken;

        if(!accessToken) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const verifiedToken = verifyToken(accessToken, envVars.JWT_ACCESS_SECRET) as JwtPayload;

        const isUserExist = User.findOne({ email: verifiedToken.email });

        if(!isUserExist) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        
        if(verifiedToken.role !== role) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = verifiedToken;

        

    } catch (error) {
        console.log(error);
        
    }

    next();

}
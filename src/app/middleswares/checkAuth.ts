import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt";
import { envVars } from "../config/env";
import { JwtPayload, TokenExpiredError } from "jsonwebtoken";
import { User } from "../modules/user/user.model";


export const checkAuth = (...authRoles: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      let accessToken = req.headers.authorization || req.cookies.accessToken;
  
      if (!accessToken) {
        return res.status(401).json({ message: "Unauthorized Access: No token provided" });
      }
  
      if (accessToken.startsWith("Bearer ")) {
        accessToken = accessToken.split(" ")[1];
      }
  
      const verifiedToken = verifyToken(accessToken, envVars.JWT_ACCESS_SECRET) as JwtPayload;
  
      const isUserExist = await User.findOne({ email: verifiedToken.email });
      if (!isUserExist) {
        return res.status(401).json({ message: "Unauthorized User" });
      }
  
      if (authRoles.length && !authRoles.includes(isUserExist.role)) {
        return res.status(403).json({ message: "Forbidden: Not enough privileges" });
      }
  
      req.user = verifiedToken;
      next();
    } catch (error: any) {
      console.error("Auth Error:", error.message);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
  
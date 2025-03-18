import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
    user?: jwt.JwtPayload;
}

export const verifyToken = (
    req: AuthRequest,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "")
        if (!token) {
            res.status(401).json({
                success: false,
                message: "Access denied. No token provided.",
            });
            return;
        }

        const decoded = jwt.verify(token, "JWT_SECRET") as jwt.JwtPayload;
        req.user = decoded;
        next();
    } catch (error) {
        res.status(403).json({
            success: false,
            message: "Invalid or expired token",
        });
        return;
    }
};

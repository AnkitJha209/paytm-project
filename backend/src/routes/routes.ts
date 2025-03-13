import express from "express";
import { signin, signup, updateProfile } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth.middleware";

export const route = express.Router();

// user routes

route.post("/auth/signup", signup);
route.post("/auth/signin", signin);
route.put("/update-profile", verifyToken, updateProfile);

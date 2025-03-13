import express from "express";
import { getUsers, signin, signup, updateProfile } from "../controllers/user.controller";
import { verifyToken } from "../middlewares/auth.middleware";
import { getBalance, transferMoney } from "../controllers/account.controller";

export const route = express.Router();

// user routes

route.post("/auth/signup", signup);
route.post("/auth/signin", signin);
route.put("/update-profile", verifyToken, updateProfile);
route.get('/getuser', verifyToken, getUsers);


// accout routes


route.get("/get-balance", verifyToken, getBalance)
route.post('/transfer-money', verifyToken, transferMoney)

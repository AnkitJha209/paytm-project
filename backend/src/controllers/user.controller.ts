import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { z } from "zod";
import jwt from "jsonwebtoken";
import { AuthRequest } from "../middlewares/auth.middleware";



export const client = new PrismaClient();

// Define Zod Schema for Signup
const signupSchema = z
    .object({
        username: z
            .string()
            .min(3, "Username must be at least 3 characters long"),
        email: z.string().email("Invalid email format"),
        firstName: z
            .string()
            .min(2, "First name must be at least 2 characters"),
        lastName: z.string().min(2, "Last name must be at least 2 characters"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"], // Attach error to confirmPassword field
    });

export const signup = async (req: Request, res: Response) => {
    try {
        const result = signupSchema.safeParse(req.body);

        if (!result.success) {
            res.status(400).json({
                success: false,
                errors: result.error.format(),
            });
            return;
        }

        const { username, email, firstName, lastName, password } = result.data;

        // Check if email already exists
        const existingEmail = await client.user.findFirst({ where: { email } });

        if (existingEmail) {
            res.status(409).json({
                success: false,
                message: "Email already exists",
            });
            return;
        }

        // Hash password
        const hashPass = await bcrypt.hash(password, 11);

        // Create new user
        const user = await client.user.create({
            data: {
                username,
                password: hashPass,
                firstName,
                lastName,
                email,
            },
        });

        const balance = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000

        await client.account.create({
            data: {
                userId: user.id,
                amount: balance
            }
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
        });
        return;
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
        return;
    }
};

const siginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Minimum 6 words password is required"),
});

export const signin = async (req: Request, res: Response) => {
    try {
        const result = siginSchema.safeParse(req.body);

        if (!result.success) {
            res.status(400).json({
                success: false,
                errors: result.error.format(),
            });
            return;
        }

        const { email, password } = result.data;

        const userExist = await client.user.findFirst({
            where: {
                email,
            },
        });
        if (!userExist) {
            res.status(411).json({
                success: false,
                message: "User with this username does not exist",
            });

            return;
        }
        if (await bcrypt.compare(password, userExist.password)) {
            const payload = {
                id: userExist.id,
            };
            const token = jwt.sign(payload, "JWT_SECRET", {expiresIn: '3h'});
            res.status(200).json({
                success: true,
                message: "Login Successfully",
                token,
                id: userExist.id
            });
            return;
        } else {
            res.status(411).json({
                success: false,
                message: "Password is not correct",
            });
            return;
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
        return;
    }
};

const updateProfileSchema = z.object({
    firstName: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .optional(),
    lastName: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .optional(),
    phoneNo: z
        .string()
        .regex(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .optional(),
});

export const updateProfile = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            res.status(401).json({
                success: false,
                message: "Unauthorized. Please log in again.",
            });
            return;
        }

        const result = updateProfileSchema.safeParse(req.body);
        if (!result.success) {
            res.status(400).json({
                success: false,
                errors: result.error.format(),
            });
            return;
        }

        const { firstName, lastName, phoneNo } = result.data;

        const updatedUser = await client.user.update({
            where: { id: userId },
            data: { firstName, lastName, phoneNo: Number(phoneNo) },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                phoneNo: true,
            },
        });
        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            user: updatedUser,
        });
        return;
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
        return;
    }
};

export const getUsers = async (req: AuthRequest, res: Response) => {
    try{
        const filter = (req.query.filter as string) || "";

        const findUsers = await client.user.findMany({
            where:{
                OR:[
                    {
                        username: {
                            contains: filter,
                            mode : "insensitive"
                        }
                    },
                    {
                        firstName: {
                            contains: filter,
                            mode: "insensitive"
                        }
                    },
                    {
                        lastName: {
                            contains: filter,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        })
        if(!findUsers){
            res.status(404).json({
                success: false,
                message: "No user found"
            })
            return;
        }
        if (findUsers.length === 0) { 
            res.status(404).json({
                success: false,
                message: "No users found"
            });
            return;
        }
        res.status(200).json({
            success: true,
            message: "Users Found",
            user: findUsers.map((user) => ({
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                id: user.id
        }))
        })
        return;

    }catch(err){
        console.log(err)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
        return;
    }
}

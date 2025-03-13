import { Response } from "express";
import { AuthRequest } from "../middlewares/auth.middleware";
import { client } from "./user.controller";



export const getBalance = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.id
        if(!userId){
            res.status(404).json({
                sucess: false,
                message: 'User not found please log in first'
            })
            return
        }
        const getBal = await client.account.findFirst({
            where: {
                userId
            }
        })
        res.status(200).json({
            success: false,
            message: "Balance Fetched Successfully",
            getBal
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
        return
    }
}


export const transferMoney = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.id
        const {to, amount} = req.body
        if(!to || !amount) {
            res.status(400).json({
                success: false,
                message: "All the details are required"
            })
            return;
        } 
        if(!userId){
            res.status(404).json({
                success: false,
                message: "User not found please log in first"
            })
            return;
        }

        const balance = await client.account.findFirst({
            where: {
                userId
            }
        })
        if(!balance){
            res.status(404).json({
                success: false,
                message: "No balance Found"
            })
            return;
        }
        if(balance.amount < amount){
            res.status(400).json({
                success: false,
                message: "Insufficient balance"
            })
            return;
        }
        const toUser = await client.account.findFirst({
            where: {
                userId: to
            }
        })
        if(!toUser){
            res.status(404).json({
                success: false,
                message: "Account Not found"
            })
            return
        }
        await client.$transaction( async (client) =>{
            await client.account.update({
                where: {
                    userId
                },
                data: {
                    amount: {decrement: amount}
                }
            }),
            await client.account.update({
                where: {
                    id: to
                },
                data: {
                    amount: {increment: amount}
                }
            })
        } 
        )

        res.status(200).json({
            success: true,
            message: "Transferred Money Successfully"
        })

        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
        return
    }
}
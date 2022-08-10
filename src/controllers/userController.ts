import { Request, Response } from "express";
import { registerUser } from "../services/userService.js";

export async function signUp(req: Request, res:Response) {
    const {email, password} = req.body
    await registerUser({email, password})
    res.sendStatus(201)
}
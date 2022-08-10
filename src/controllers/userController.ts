import { Request, Response } from "express";
import { registerUser, singInUser } from "../services/userService.js";

export async function signUp(req: Request, res:Response) {
    const {email, password} = req.body
    await registerUser({email, password})
    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const {email, password}: {email: string, password: string} = req.body
    const token = await singInUser({email, password})
    res.status(200).send(token)
}
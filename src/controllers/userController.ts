import { Request, Response } from "express";
import { getUserComputers } from "../repositories/userRepository.js";
import { registerUser, removeEmptyComputers, singInUser } from "../services/userService.js";

export async function signUp(req: Request, res:Response) {
    const {email, password}: {email: string, password: string} = req.body
    await registerUser({email, password})
    res.sendStatus(201)
}

export async function signIn(req: Request, res: Response) {
    const {email, password}: {email: string, password: string} = req.body
    const token = await singInUser({email, password})
    res.status(200).send(token)
}

export async function showUserComputer(req: Request, res: Response) {
    const {id} = req.params
    const computers = await removeEmptyComputers(id)

    res.status(200).send(computers)
}
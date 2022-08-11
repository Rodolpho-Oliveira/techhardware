import { Request, Response } from "express";
import { getHardwareSpecs } from "../repositories/productRepository.js";


export async function getSpecs(req: Request, res: Response){
    const {id} = req.params
    const spec: object = await getHardwareSpecs(parseInt(id))
    console.log(spec)
    res.status(200).send(spec)
}
import { Request, Response } from "express";
import { getAllProducts } from "../repositories/searchRepository.js";

export async function showAllProducts(req: Request, res: Response){
    const products: object = await getAllProducts()

    res.status(200).send(products)
}
import { Request, Response } from "express";
import { getAllProducts, getAllProductsByName, getAllProductsByType } from "../repositories/searchRepository.js";

export async function showAllProducts(req: Request, res: Response){
    const products: object = await getAllProducts()

    res.status(200).send(products)
}

export async function showAllProductsByType(req: Request, res: Response){
    const {type} = req.params
    const products: object = await getAllProductsByType(type)

    res.status(200).send(products)
}

export async function showAllProductsByName(req: Request, res: Response){
    const {name}: {name: string} = req.body
    const products: object = await getAllProductsByName(name)

    res.status(200).send(products)
}
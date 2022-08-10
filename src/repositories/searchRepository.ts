import { db } from "../app/database.js";

export async function getAllProducts() {
    return await db.hardwares.findMany()
}

export async function getAllProductsByType(type: string) {
    return await db.hardwares.findMany({where: {type: type}})
}

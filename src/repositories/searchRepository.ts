import { db } from "../app/database.js";

export async function getAllProducts() {
    return await db.hardwares.findMany()
}
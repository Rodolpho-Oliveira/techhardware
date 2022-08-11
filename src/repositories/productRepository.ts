import { db } from "../app/database.js";

export async function getHardwareSpecs(id: number) {
    return await db.specs.findUnique({
        where:{id: id},
        include:{
        hardware: {
            where:{spec_id: id}
        }
    }})
}
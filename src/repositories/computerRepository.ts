import { db } from "../app/database.js";

export async function getAllMotherboards() {
    return await db.hardwares.findMany({
        where: {type: "motherboard"}
    })
}

export async function getAllGpu() {
    return await db.hardwares.findMany({
        where: {type: "gpu"}
    })
}

export async function getAllCpuBySocket(socket: string) {
    return await db.specs.findMany({
        where: {socket: socket},
        select: {
            tdp: true,
            socket: true,
            core: true,
            thread: true,
            hardware:{
                where:{
                    type: "cpu"
                }
            }
        }
    })
}


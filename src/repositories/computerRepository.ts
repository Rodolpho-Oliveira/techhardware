import { computers } from "@prisma/client";
import { db } from "../app/database.js";

export type CreateComputerData = Omit<computers, "id">

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

export async function getAllRamsByDdr(ddr: number) {
    return await db.specs.findMany({
        where: {ddr: ddr},
        select:{
            tdp: true,
            capacity: true,
            ddr: true,
            frequency: true,
            hardware:{
                where:{
                    type: "ram"
                }
            }
        }
    })
}

export async function getAllDrives() {
    return await db.hardwares.findMany({
        where:{type: "drive"}
    })
}

export async function getAllFontsByTdp(tdp: number) {
    return await db.specs.findMany({
        where:{
            tdp:{
                gte: tdp
            }
        },
        select:{
            tdp: true,
            hardware:{
                where:{
                    type: "font"
                }
            }
        }
    })
}

export async function saveUserComputer(createComputerData: CreateComputerData, id: number) {
    await db.computers.create({
        data: {
            name: createComputerData.name,
            motherboard: createComputerData.motherboard,
            cpu: createComputerData.cpu,
            gpu: createComputerData.gpu,
            drive: createComputerData.drive,
            font: createComputerData.font,
            ram: createComputerData.ram,
            user_computers: {
                create: [
                {user_id: id}
                ]
            }
        }
    })
}

export async function getComputerName(id: number, name: string) {
    const computerName: Array<any> = await db.computers.findMany({
        where:{name: name},
        select:{
            user_computers:{
                where:{
                    user_id: id
                }
            }
        }
    })
    return computerName
}
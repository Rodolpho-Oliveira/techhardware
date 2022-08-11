import { Response, Request } from "express";
import { getAllCpuBySocket, getAllGpu, getAllMotherboards, getAllRamsByDdr } from "../repositories/computerRepository.js";

export async function showAllMotherboards(req: Request, res: Response){
    const motherboards = await getAllMotherboards()

    res.status(200).send(motherboards)
}

export async function showAllGpu(req: Request, res: Response){
    const gpu = await getAllGpu()

    res.status(200).send(gpu)
}

export async function showAllCpu(req: Request, res: Response){
    const {socket}: {socket: string} = req.body
    const cpu = await getAllCpuBySocket(socket)

    res.status(200).send(cpu)
}

export async function showAllRam(req: Request, res: Response) {
    const {ddr}: {ddr: number} = req.body
    const ram = await getAllRamsByDdr(ddr)

    res.status(200).send(ram)
}
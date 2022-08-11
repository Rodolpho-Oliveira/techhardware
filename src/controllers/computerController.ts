import { Response, Request } from "express";
import { getAllCpuBySocket, getAllGpu, getAllMotherboards } from "../repositories/computerRepository.js";

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

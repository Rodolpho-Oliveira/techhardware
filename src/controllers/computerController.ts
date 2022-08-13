import { Response, Request } from "express";
import { getAllCpuBySocket, getAllDrives, getAllFontsByTdp, getAllGpu, getAllMotherboards, getAllRamsByDdr, saveUserComputer } from "../repositories/computerRepository.js";
import { checkComputerName } from "../services/computerService.js";

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

export async function showAllDrives(req: Request, res: Response) {
    const drive = await getAllDrives()

    res.status(200).send(drive)
}

export async function showAllFonts(req: Request, res: Response) {
    const {tdp} = req.body
    const font = await getAllFontsByTdp(tdp)

    res.status(200).send(font)
}

export async function saveComputer(req: Request, res: Response){
    const specs = req.body
    const id = res.locals.user
    if(!specs || !specs.motherboard || !specs.name){
        throw {type: "Select the motherboard and name", status: 403}
    }
    if(!id){
        throw {type: "Login first", status: 401}
    }
    
    await checkComputerName(id, specs.name)
    await saveUserComputer(specs, id)

    res.sendStatus(201)
}
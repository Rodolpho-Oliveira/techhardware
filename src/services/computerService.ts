import { getComputerName } from "../repositories/computerRepository.js";

export async function checkComputerName(id: number, name: string) {
    const verifyName: Array<any> = await getComputerName(id, name)
    console.log(verifyName)
    verifyName.forEach(name => {
        if(name.user_computers.length !== 0){
            throw {type: "Name already in use by yourself", status: 409}
        }
    })
}
import { db } from "../app/database.js";
import { CreateUserData } from "../services/userService.js";

export async function checkUserRegister(email: string) {
    return await db.users.findUnique({
        where: {email: email}
    })
}

export async function RegisterNewUser(createUserData: CreateUserData) {
    return await db.users.create({data: createUserData})
}

export async function getUserComputers(id: number) {
    const computers = await db.computers.findMany({
        select:{
            id: true,
            motherboard: true,
            motherboardId: true,
            user_computers:{
                where:{
                    user_id: id
                }
            },
        }
    })

    return computers
}